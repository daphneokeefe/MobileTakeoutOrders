Mobile Takeout Orders
=====================

Mobile-first prototype web app for placing restaurant takeout orders

This mobile-friendly web app serves as a template for creating simple restaurant takeout order apps.

It employs jQuery, jQueryMobile and mustache.js to render what appear to be different web pages, but there is only one HTML page here. The page divs are:
  Home Page
  About Page
  Menu Page
  Order Page
  Thank You Page
  
To keep the template simple, there is no server-side code and no database. The data source is mocked with JSON. The entire action navigating among the pages is done with JavaScript residing in external .js files.

There are two categories of menu items -- burgers and sides. There are two burger selections and one side order item. Each has a description and image. This functionality is easily expandable to many categories and items. 

The user can navigate back and forth between adding items to the order on the menu page, and viewing the total order on the order page. 
