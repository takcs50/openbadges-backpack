<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/bootstrap-1.2.0.min.css" />
    <link rel="stylesheet" href="/css/style.css" type="text/css" media="all" />
    <title dir="ltr">Open Badge Backpack</title>
    <script type="text/javascript" src="https://browserid.org/include.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript" src="/js/modernizr.js"></script>
  </head>
  <body>
    <div class="topbar">
      <div class="topbar-inner">
        <div class="container" style="position: relative;">
          <h3><a href="#">Open Badge Backpack</a></h3>
          <a id="moztab" href="http://mozilla.org">a mozilla.org joint</a>
          <ul class="nav">
            <li><a href="{{#reverse}}backpack.manage{{/reverse}}">Home</a></li>
            <li><a href="{{#reverse}}backpack.signout{{/reverse}}">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div>{{body}}</div>
  </body>
</html>
