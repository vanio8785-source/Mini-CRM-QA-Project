# Bug Reports – Mini CRM

## BUG-001
**Title:** Login allows empty username  
**Severity:** High  
**Steps:** Leave username empty and click login  
**Actual:** Dashboard loads  
**Expected:** Validation error  
**Status:** Open  

---

## BUG-002
**Title:** Duplicate email allowed  
**Severity:** High  
**Steps:** Add customer with existing email  
**Actual:** Record saved  
**Expected:** Duplicate prevented  
**Status:** Open  

---

## BUG-003
**Title:** User can access admin function via console  
**Severity:** Critical  
**Steps:** Log in as User → Execute editCustomer()  
**Actual:** Function executes  
**Expected:** Access denied  
**Status:** Open  

---

## BUG-004
**Title:** Negative age allowed  
**Severity:** Medium  
**Steps:** Edit age to -5  
**Actual:** Saved  
**Expected:** Validation error  
**Status:** Open  

---

## BUG-005
**Title:** Search is case sensitive  
**Severity:** Medium  
**Steps:** Search lowercase name  
**Actual:** No results  
**Expected:** Case insensitive search  
**Status:** Open  