var ll=document.getElementsByTagName("a");
document.write("<div>");
for(var i=0;i<ll.length;i++)
{
    document.write("<p>"+ll[i].href+"</p>");
}
document.write("</div>");