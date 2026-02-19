const sidebar = {
  Docs: [
    {
      label: "Getting Started",
      type: "category",
      link: {
        type: "doc",
        id: "index",
      },
      items: ["get-started/install", "get-started/post-installation"],
    },
    {
      label: "User Guide",
      type: "category",
      items: [
        "user-guide/keybinds",
        "user-guide/configuration",
        "user-guide/applications",
        "user-guide/package-management",
        "user-guide/myctl",
      ],
    },
    {
      label: "Developer Guide",
      type: "category",
      items: ["dev-guide/myctl-modules"],
    },
    {
      label: "Autotitle",
      type: "category",
      link: {
        type: "doc",
        id: "autotitle/index",
      },
      items: [
        "autotitle/install",
        "autotitle/quickstart",
        "autotitle/configuration",
        "autotitle/cli-reference",
        "autotitle/add-sources",
        {
          label: "Go Library",
          type: "category",
          link: {
            type: "doc",
            id: "autotitle/library/index",
          },
          items: [
            "autotitle/library/api",
            "autotitle/library/advanced"
          ],
        },
      ],
    },
    "contributing",
    "faq",
  ],
};

export default sidebar;
