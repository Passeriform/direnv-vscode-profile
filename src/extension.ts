import { window, workspace, commands, type ExtensionContext } from "vscode";

const channel = window.createOutputChannel("direnv vscode profile", { log: true });

export const activate = async (context: ExtensionContext) => {
  context.subscriptions.push(channel);

  const evaluateProfileChange = async () => {
    if (!process.env.VSCODE_PROFILE) {
      channel.info(`No target profile found. Switching profile to: default`);
    }

    const targetProfile = process.env.VSCODE_PROFILE || "default";

    const currentProfile =
      workspace.getConfiguration("workbench").get("settings.application.profile") || "default";

    if (currentProfile === targetProfile) {
      channel.info(`Requested profile is already active: ${targetProfile}`);
      return;
    }

    channel.info(`Attempting profile switch to: ${targetProfile}`);

    try {
      await commands.executeCommand("workbench.profiles.actions.switchProfile", targetProfile);
      channel.info(`Switched VSCode profile to: ${targetProfile}`);
      window.showInformationMessage(`Switched VSCode profile to: ${targetProfile}`);
    } catch (err) {
      channel.error("Failed to switch profile:", err);

      const button = "Check Logs";
      const selection = await window.showErrorMessage(
        `Error occurred while trying to switch VSCode profile to: ${targetProfile}`,
        button,
      );

      if (selection === button) {
        channel.show();
      }
    }
  };

  await evaluateProfileChange();

  const configWatcher = workspace.onDidChangeConfiguration(async (event) => {
    if (
      event.affectsConfiguration("terminal.integrated.env") ||
      event.affectsConfiguration("direnv")
    ) {
      await evaluateProfileChange();
    }
  });

  context.subscriptions.push(configWatcher);
};

export const deactivate = () => {};
