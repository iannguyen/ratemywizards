# RateMyWizards

Not yet pushed to Heroku.
[RateMyWizards][heroku]
[heroku]: http://www.herokuapp.com

## Minimum Viable Product

RateMyWizards is a web application inspired by RateMyProfessors.
RateMyWizards allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Browse through Professors by Houses
- [ ] Search for Professors
- [ ] Create, read, edit, delete Reviews for multiple Professors
- [ ] Choose to display username, or remain anonymous for Reviews

## Design Docs
* [View Wireframes][view]
* [Database Schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Models, JSON API (1 day)

Begin with creating User Authentication and basic landing page. Landing page will contain the container for the root React Component. Afterwards, create all models and validations for Professors, Houses, and Reviews. Implement full JSON API to fetch professors.

[Details][phase-one]

### Phase 2: Professors Seed, HomePage React Router, Houses React Views, FLUX (2 days)

Implement React Router on HomePage. From Root path, users navigate to /House/id by selecting a House. Houses will function like Tabs and display Professors belonging to the selected House. React Views will include HouseIndex, HouseDetail, and HouseIndexItem (Professors). Create seed data for testing.

[Details][phase-two]

### Phase 3: Search Bar Implementation, Professor Show Page (1 day)

Implement Search Bar on HomePage. Will function like AutoComplete. Create React Views for SearchBar, and SearchBarItem (Professor). Create Professor Show Page. Update SearchBarItem and HouseIndexItem to include Click Handlers that render the Professor Show Page.

[Details][phase-three]

### Phase 4: Professor Show Page React Views, Reviews CRUD (3 days)

Create React Views for Professor Show Page: ReviewIndex, ReviewIndexItem, and ReviewDetail. Implement ProfessorRoute, ReviewStore, ApiActions and ApiUtils. Show Page will include Professor information and a button to Rate, which will render new Review Page. Create new ReviewForm. Test CRUD.

[Details][phase-four]

### Phase 5: Styling (2-3 days)

Basic Features will have been completed. Dedicate 2-3 days to implement CSS styling and Bootstrap.

[Details][phase-five]

##BONUS

- [ ] View previous Reviews through profile page.
- [ ] Add images to Professors and Users
- [ ] Add Professors to Review
- [ ] Agree or Disagree with review
- [ ] Create an account as a Professor

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
