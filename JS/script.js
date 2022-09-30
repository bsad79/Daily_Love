var search = document.getElementById("search")
var contentID = document.getElementById("contentID")
var contentTitle = document.getElementById("contentTitle")
var contentType = document.getElementById("contentType")
var contentBody = document.getElementById("contentBody")
var contentSrc = document.getElementById("contentSrc")

//Search for specific content
function searchContent() {
    cleanUp()

    let newContent = content[search.value]
    setUp(newContent)
}

//Get random content from db
function getContent() {
    cleanUp()

    let number = Math.floor((Math.random() * (content.length)))
    //console.log(number)

    let newContent = content[number]

    setUp(newContent)
}

//Remove previous content
function cleanUp() {
    contentID.removeChild(contentID.firstChild)
    contentTitle.removeChild(contentTitle.firstChild)
    contentType.removeChild(contentType.firstChild)
    contentBody.removeChild(contentBody.firstChild)
}

//Set new content
function setUp(newContent) {
    let newID = newContent[0]
    let newTitle = newContent[1]
    let newType = newContent[2]
    let newBody = newContent[3]
    let newSrc = newContent[4]

    contentID.appendChild(document.createTextNode(newID))
    contentTitle.appendChild(document.createTextNode(newTitle))
    contentType.appendChild(document.createTextNode(newType))
    contentBody.appendChild(document.createTextNode(newBody))
    contentSrc.setAttribute("href", newSrc)
}