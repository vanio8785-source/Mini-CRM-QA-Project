SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
1. Project Overview

Mini CRM web application for managing friends’ contact information with role-based access control.

The system allows authentication and CRUD operations depending on user role.

2. User Roles
2.1 Admin

Can login

Can add friend

Can edit friend

Can delete friend

Can search friend

Can view all friends

2.2 Regular User

Can login

Can view friends

Can search friends

Cannot add

Cannot edit

Cannot delete

3. Functional Requirements
FR-01 – Login

The system shall allow registered users to log in using username and password.

FR-02 – Invalid Login Handling

The system shall display an error message for invalid credentials.

FR-03 – Role-Based Access

The system shall restrict features based on user role.

FR-04 – Add Friend

Admin shall be able to add a new friend with:

Name (required)

Email (required, valid format)

Phone

Age (must be positive number)

City

FR-05 – Edit Friend

Admin shall be able to edit existing friend details.

FR-06 – Delete Friend

Admin shall be able to delete friend records.

FR-07 – View Friend List

All authenticated users shall see the list of friends.

FR-08 – Search Friend

Users shall be able to search friends by name or city.

FR-09 – Duplicate Email Prevention

System shall not allow adding two friends with the same email.

FR-10 – Logout

System shall terminate session and redirect to login page.

4. Non-Functional Requirements

NFR-01: System shall load pages within 3 seconds.

NFR-02: Input validation shall prevent invalid data submission.

NFR-03: Unauthorized users shall not access restricted pages via direct URL.

5. Business Rules

Email must be unique.

Age must be between 1 and 120.

Username must be unique.

Only Admin can modify data.