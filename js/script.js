var count = 0;
var entries = "";
var counter = document.getElementById('counter');
var save =  document.getElementById('save');
var add = document.getElementById('add');
var entriesText = document.getElementById('entries');

console.log(add);

add.addEventListener('click', function (){
  count++;
  counter.innerHTML = count;
});

save.addEventListener('click', function(){
  if (entries == "") {
    entries = count;
  } else {
    entries = entries + " - " + count;
  }
  entriesText.innerHTML= entries;
  count = 0;
  counter.innerHTML = count;
})
