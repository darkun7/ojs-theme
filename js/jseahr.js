var archive = $('.obj_issue_summary')

var archive = $('.obj_issue_summary')
for (i = 0; i < archive.length; i++){
  if(i >= 6){
    archive[i].remove()
  }
}
$(".cmp_pagination").hide();
