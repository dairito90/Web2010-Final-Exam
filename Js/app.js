//i do my best in this part i hope you understand me//


$("#submit").click(search).val{
  function getArticles(search){

    $.ajax({
      url:'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='+search,
      success: "",
      datatype: "json",
      data:""
  });

  };
};



$("#articles").append(

  var article = "";
      article += `<div class="articles">`;
      article += `<h3>${title}</h3>`;
      article +=`<p>${snippet}</p>`;

);


$("#submit").html("");




  }
