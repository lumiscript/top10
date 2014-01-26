var url = "http://www.dailymail.co.uk/news/article-2297585/Wild-squirrels-pose-charming-pictures-photographer-hides-nuts-miniature-props.html"

download(url, function(data) {
  if (data) {
    console.log(data);
  }
  else console.log("error");  
});