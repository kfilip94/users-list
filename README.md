# Virtualized User List component
This User list component allows you to load long list of users from your API without a performance drop.



Technologies & features:
- [react-virtual](https://github.com/tannerlinsley/react-virtual) - this library provides an easy way to virtualize your table and render only visible elements in DOM,
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - used for fetching next page of users list whenever the user scrolls to the end, and also for lazy loading images,
- [react-query](https://github.com/tannerlinsley/react-query) - easy way for querying data in React using hooks