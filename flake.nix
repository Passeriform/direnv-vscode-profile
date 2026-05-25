{
  description = "direnv VSCode Profile Dev Shell";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
  };

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
    profile = "web";
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = with pkgs; [
        statix
        deadnix
        nodejs
        typescript
        vite
      ];

      shellHook = ''
        export VSCODE_PROFILE="${profile}";

        if [ ! -d "node_modules" ]; then
          npm install
        fi
      '';
    };
  };
}
