# Virtualized User List component
This User list component allows you to load long list of users from your API without a performance drop.

![Alt Text](https://media.giphy.com/media/45mr7vbeQZ9KdbZqQd/giphy.gif)

LINKS:
- [preview on Netlify](https://main--naughty-hopper-06351f.netlify.app/)
- [codesandbox](https://codesandbox.io/s/github/kfilip94/users-list)

Technologies & features:
- [react-virtual](https://github.com/tannerlinsley/react-virtual) - this library provides an easy way to virtualize your table and render only visible elements in DOM,
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - used for fetching next page of users list whenever the user scrolls to the end, and also for lazy loading images,
- [react-query](https://github.com/tannerlinsley/react-query) - easy way for querying data in React using hooks