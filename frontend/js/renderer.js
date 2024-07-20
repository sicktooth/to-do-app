const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${api.chrome()}), Node.js (v${api.node()}), and Electron (v${api.electron()})`