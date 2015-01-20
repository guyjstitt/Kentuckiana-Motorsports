<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

/*start default */
?>
<!DOCTYPE html>
<html class="no-js no-csstransforms">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:title" content="My Website" />
        <meta property="og:type" content="personal" />
        <meta property="og:url" content="http://guyjstitt.com" />
        <meta property="og:image" content="http://guyjstitt.com/img/site.JPG" />
        <meta property="og:description" content="Welcome to my personal website" />
        <title>Kentuckiana Motorsports</title>
        {{ html.css('bootstrap.min') }}
        {{ html.css('/sass/css/default.desktop') }}
        <link rel="stylesheet" href="css/font-awesome.css">
        <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,300,300italic,200,400italic,600,600italic' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <div class="contentWrapper">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                    <div class="header">
                        <ul class="nav nav-tabs">
                            <li role="presentation" class="active"><a href="#">Home</a></li>
                            <li role="presentation"><a href="#">Services</a></li>
                            <li role="presentation"><a href="#">Derby City Riding School</a></li>
                            <li role="presentation"><a href="#">Trikes</a></li>
                            <li role="presentation"><a href="#">Contact / Directions</a></li>
                            <li role="presentation"><a href="#">Used Bikes</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="wrapper">
                            {% include 'Pages/home.tpl' %}
                        </div>
                        <div class="divider"></div>
                        <div class="footer">
                            <div class="foot-container">
                              <div class="foot-text col-sm-8">
                                  <div class="row mainFootContent"> 
                                      <div class="col-xs-3 footContentFirst">
                                        <div> 
                                          <img class="logoImageFooter" src="app/webroot/sass/img/biker-logo.png" width="643" height="274" alt="RJ Louisville">
                                        </div>
                                      </div>
                                      <div class="col-xs-3 footContent">
                                        <div>
                                          <a href=""><h3>Services</h3></a>
                                          <a href=""><h3>Derby City Riding School</h3></a>
                                          <a href=""><h3>Trikes</h3></a>
                                        </div> 
                                      </div>
                                      <div class="col-xs-3 footContent">
                                        <div>
                                          <a href=""><h3>Contact / Directions</h3></a>
                                          <a href=""><h3>Used Bikes</h3></a>
                                          <a href=""><h3>Log In</h3></a>
                                        </div> 
                                      </div>
                                      <div class="col-xs-3 footContentLast">
                                        <div>
                                          <h3>Follow Us</h3>
                                          <ul class="footLinks">
                                            <li><a class="fbFollow" target="_blank" href=""><img src="app/webroot/sass/img/fb-logo.png"></a></li>
                                          </ul>
                                        </div> 
                                      </div>
                                  </div>
                              </div>
                         </div>
                      </div>
                    </div>
                    
              </div>
        </div> 
        {{ html.script('jquery-1.11.1.min') }}
        {{ html.script('libs/bootstrap.min') }}
       <script type="text/javascript" src="app/webroot/js/slider.js"></script>
    </body>
</html>
