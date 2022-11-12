{ pkgs }: {
  deps = [
    pkgs.toybox
    pkgs.nodejs
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}