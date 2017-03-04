function getFirstSelector(selector) {
  //accepts a selector and returns the first element that matches
  return document.querySelector(selector)
}
function nestedTarget() {
  //pulls a .target out of #nested
  return document.querySelector("#nested .target")
}
function deepestChild() {
  //pulls out the most deeply nested child from div#grand-node
  var node = document.getElementById("grand-node")
  var nextNode = node.children[0]
  while (nextNode) {
    node = nextNode 
    nextNode = node.children[0]
  }
  return node
}
function increaseRankBy(n) {
  //increases ranks in .ranked-list by n
  var rankedLists = document.querySelectorAll(".ranked-list")
  for (var i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children
    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}