const structure = [{
        'folder': true,
        'title': 'Films',
        'children': [{
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [{
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [{
            'folder': true,
            'title': 'EPAM Homework answers',
            'children': null
        }]
    }
];

const rootNode = document.getElementById('root');
const makeTree = (json) => {
    rootNode.appendChild(createTreeBranch(json));
}

const createTreeBranch = (obj) => {

    if (!obj) {
        return;
    }
    let ul = document.createElement('ul');

    obj.forEach(element => {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let iconType = element.folder ? 'folder' : 'insert_drive_file';
        let icon = document.createElement('i');

        if (element.title === 'Folder is empty') {
            icon.appendChild(document.createTextNode(element.title));
            div.appendChild(icon);
            li.appendChild(div);
            li.classList.add('folder-is-empty');
        } else {
            icon.appendChild(document.createTextNode(iconType));
            icon.classList.add('material-icons');
            div.appendChild(icon);
            div.appendChild(document.createTextNode(element.title));
            li.appendChild(div);
            li.classList.add(iconType);
        }

        li.dataset.folder = Boolean(element.folder);

        if (element.children) {
            li.appendChild(createTreeBranch(element.children));
        } else if (iconType === 'folder') {
            li.appendChild(createTreeBranch([{ 'title': 'Folder is empty' }]));
        }

        ul.appendChild(li);
    });
    return ul;
}

const collapseAllFolders = (parent) => {
    if (parent.childNodes.length <= 0) {
        return;
    }
    parent.childNodes.forEach(node => {
        try {
            if (node.dataset.folder === 'true') {
                let el = node.firstChild.nextSibling;
                el.classList.toggle('hide');
            }
        } catch (e) {
            console.log(e);
            return;
        }
        collapseAllFolders(node);
    });
}

const toggleFolder = (parent) => {
    if (parent.localName === 'ul' || parent.localName === null) {
        return;
    }

    try {
        while (parent.dataset.folder !== 'true') {
            if (parent.dataset.folder === 'false') {
                return;
            }
            parent = parent.parentNode;
        }
        let icon = parent.firstChild.firstChild.textContent;
        parent.firstChild.firstChild.textContent = icon === 'folder' ? 'folder_open' : 'folder';
        let el = parent.firstChild.nextSibling;
        el.classList.toggle('hide');
    } catch (e) {
        console.log(e);
        return;
    }
}

let setupEventListeners = function() {
    rootNode.addEventListener('click', (event) => {
        toggleFolder(event.target);
    });
};

makeTree(structure);
collapseAllFolders(rootNode);
setupEventListeners();