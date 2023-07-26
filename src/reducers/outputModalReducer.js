export const outputSrcReducer = (state = "", action) => {

    switch(action.type){
        case "setSrcdoc":
            state = `
            <html>
              <body>${files["index.html"].value}</body>
              <style>${files["style.css"].value}</style>
              <script>${files["script.js"].value}</script>
            </html>
          `
            return state
        default:
            return state
    }
}
