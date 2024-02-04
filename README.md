# event-planner
 Event planner CMS with AngularJS and Google App Script

### Google Sheets Setup
<ol>
    <li>Go to https://sheets.google.com/ and load the <code>sample.csv</code> template</li>
    <li>On the navigation bar, click Extensions --> Apps Script</li>
    <img width="1470" alt="Screenshot 2024-02-04 at 1 13 41 PM" src="https://github.com/iskevinlemon/event-planner/assets/126497052/2f484be3-8bd5-4acd-b063-7d0ce6d95730">
    <li>Copy paste <code>code.gs</code> into the code editor in Apps Script</li>
    <img width="1470" alt="Screenshot 2024-02-04 at 1 17 29 PM" src="https://github.com/iskevinlemon/event-planner/assets/126497052/58af3ea2-c7be-4d4f-91ed-9598f1d6dac5">
    <li>Click Deploy --> New deployment</li>
    <img width="1470" alt="image" src="https://github.com/iskevinlemon/event-planner/assets/126497052/c24bd4d6-5fd1-4515-b703-5462ea328707"><br>
    <li>A New deployment dialog will appear. <b>Follow the settings exactly, else errors will occur</b></li>
    <img width="1470" alt="Screenshot 2024-02-04 at 1 22 35 PM" src="https://github.com/iskevinlemon/event-planner/assets/126497052/2b9879bd-e0c9-4697-bf1a-60f737123884">
    <li>
      <b>New description: </b> add a description <br>
      <b>Execute as: </b> Me <br>
      <b>Who has access: </b> Anyone <br>
    </li>
    <li>Click Deploy</li>
    <li>Copy the Web app URL </li>
    <img width="1470" alt="Screenshot 2024-02-04 at 1 28 02 PM" src="https://github.com/iskevinlemon/event-planner/assets/126497052/b0ea0716-6df2-4680-bac0-c10483069a9f">
    <li>Paste this as the value of the <code>apiUrl</code> variable in the index.html </li>
    <li>You may deploy this index.html on any cloud platform of your choice. I recommend https://www.netlify.com/ </li>
</ol>
