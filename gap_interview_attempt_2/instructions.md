@@ -0,0 +1,31 @@

# Instructions

## Step1

Use react hooks
Use this endpoint, https://jsonplaceholder.typicode.com/comments to fetch comments data from the API.

## Step2

Create a container that holds multiple cards.
Each card should have a username and a comment text.
The cards should have a responsive width with a consistent gap between them.
The username and comment text should be left-aligned within the card.
Add a "Like" button next to each comment. The image should take up the right portion of the card. The image is in src/assets folder
Wire the components with API data.

Component

- username
- comment text

## Step3

Utilize the provided “like” and “unlike” images. They are in src/assets folder
When clicking the button, it should change the state to "like" for that specific comment and viceversa.

## Step4 (Extra)

Dynamically display the number of "likes" of all comments.
When clicking the "like" button, it should increase the "like" counter.
When clicking the "unlike" button, it should decrease the "like" counter.
