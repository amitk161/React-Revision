const explorer = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "public_nested_01",
                    isFolder: true,
                    items: [
                        {
                            name: "index.html",
                            isFolder: false
                        },
                        {
                            name: "hello.html",
                            isFolder: false
                        }
                    ]
                },
                {
                    name: "public_nested_02",
                    isFolder: false
                }
                   
            ]
        },
        {
            name: "src",
            isFolder: true,
            items: [
              {
                name: "App.js",
                isFolder: false,
              },
              {
                name: "Index.js",
                isFolder: false,
              },
              {
                name: "styles.css",
                isFolder: false,
              },
            ],
        },
        {
            name: "package.json",
            isFolder: false,
        },
    ]
}

export default explorer