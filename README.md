# React People Table (task from Mate.Academy)

Implement the `App` with 2 pages and ability to select a person in the table.

1. Create the `HomePage` available at `/` with just a title `Home Page`
2. Create the `PeoplePage` available at `/people` with a title `People Page`
3. Use [Navigate] component to redirect from `/home` to `/`;
   - add `replace` attribute not to save `/home` URL in the [browser history] and avoid navigation loop when you press browser `Go back` button.
4. Implement `NotFoundPage` with a title `Page not found` that is shown for all the other URLs;
5. Add the `Navbar` with 2 links `Home` and `People`. Active one should have the `has-background-grey-lighter` class;
6. Use `HashRouter` to be able to share a link to any page on Github pages;
7. Fetch `people` from [the API](https://mate-academy.github.io/react_people-table/api/people.json) when `PeoplePage` is opened;
8. Pass `people` to `PeopleTable` component and render as a table (see the given markup);
9. Make each name in the table a link a to `/people/:slug` (including mother and father)
   - add the `has-text-danger` class for women names;
   - if there is no person with a given name among the people just keep the name as a text (not a link);
   - if the motherName or fatherName is empty put `-` to the table
10. Highlight the row of the selected person with the `has-background-warning` class;
