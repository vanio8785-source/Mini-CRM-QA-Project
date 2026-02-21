# Test Cases – Mini CRM

| TC ID | Title | Preconditions | Steps | Expected Result |
|-------|-------|--------------|-------|----------------|
| TC-001 | Login with valid credentials | User exists | Enter valid username/password | Redirect to dashboard |
| TC-002 | Login with invalid password | User exists | Enter wrong password | Error message displayed |
| TC-003 | Login with empty fields | None | Click Login without data | Validation message |
| TC-004 | Display customer table | Logged in | Open dashboard | All customers visible |
| TC-005 | Search by name | Logged in | Enter name in search | Filtered results |
| TC-006 | Search no results | Logged in | Enter random string | “No results” message |
| TC-007 | Add new customer | Admin logged in | Fill form and Save | Customer added |
| TC-008 | Add duplicate email | Admin logged in | Add existing email | Validation error |
| TC-009 | Edit customer | Admin logged in | Modify and Save | Data updated |
| TC-010 | Delete customer | Admin logged in | Delete and confirm | Customer removed |
| TC-011 | User cannot see Add button | User logged in | Check dashboard | No Add button |
| TC-012 | User cannot edit | User logged in | Try edit | Access denied |
| TC-013 | Required field validation | Admin logged in | Leave name empty | Validation message |
| TC-014 | Negative age validation | Admin logged in | Enter -5 | Validation error |
| TC-015 | Logout functionality | Logged in | Click logout | Redirect to login |
| TC-016 | Cancel Add form | Admin | Click Cancel | No changes saved |
| TC-017 | Cancel Delete | Admin | Cancel confirm | Data remains |
| TC-018 | Search case insensitive | Logged in | Search lowercase | Results shown |
| TC-019 | Table refresh after CRUD | Admin | Add new record | Table updates |
| TC-020 | Unauthorized URL access | User logged in | Try admin action via console | Access blocked |