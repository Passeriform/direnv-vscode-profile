# direnv VSCode Profile

This is an extension meant to work with [vscode-direnv](https://github.com/direnv/direnv-vscode) to switch VSCode
profiles using `VSCODE_PROFILE` environment variable.

> [!NOTE]
> VSCode by default doesn't allow switching profiles by name so this extension only opens the profile quick open menu
> where you need to select which profile to choose (bummer).
> Alternatively, you can use [patchVSCode.sh](./patchVSCode.sh), that will modify the VSCode binary to allow switching
> profiles automatically.

> [!WARNING]
> Patching the vscode binary will break the build and an error will be thrown every time you open the window. Since,
> this isn't resolved yet, consider this a !!!MAXIMALLY BREAKING CHANGE!!!
> You have been warned...

# Requirements

This extension requires [vscode-direnv](https://github.com/direnv/direnv-vscode) extension and [direnv](https://direnv.net)
installed.

# Acknowledgements

The logo is copyright 2015 Peter Waller and was created as the [direnv](https://github.com/direnv/direnv-logo) logo.
Additional modifications have been made to the logo as permitted by Creative Commons Attribution 4.0 International License.
