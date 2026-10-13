function getElement(selector) {
    return document.querySelector(selector);
}

function setCss(element, property, value) {
    // element.style.property = value;
    element.style[property] = value;
}

function on(element, eventType, callback) {
    element.addEventListener(eventType, callback);
}

function click(element, callback) {
    on(element, 'click', callback);
}

const contactsTable = getElement('#contactsTable tbody');
const addContactForm = getElement('#addContact');
const firstInput = getElement('#first');
const lastInput = getElement('#last');
const emailInput = getElement('#email');
const phoneInput = getElement('#phone');
const addContactButton = getElement('#add');
let contacts = [];

function hideAddContactForm() {
    setCss(addContactForm, 'display', 'none');
    addContactForm.reset();
    setCss(addContactButton, 'visibility', 'visible');
}

on(addContactForm, 'submit', e => {
    e.preventDefault();
    addNewContact(firstInput.value, lastInput.value, emailInput.value, phoneInput.value);
});

function addNewContact(first,last,email,phone) {
    //clearing no contacts loaded
    if (!contacts.length) {
        contactsTable.innerHTML = '';
    }

    //adding new contact to stored array
    const newContact = {
        first: first,
        last: last,
        email: email,
        phone: phone
    };

    contacts.push(newContact);

    //creating row and adding contacts to table
    const row = contactsTable.insertRow();
    row.innerHTML = `
    <td>${first}</td>
    <td>${last}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td><button>delete</button></td>
  `;


    row.querySelector('button').addEventListener('click', () => {
        row.remove();

        //checking through the array and deleting the one that matches this one
        contacts = contacts.filter(c => c !== newContact);

        if (!contacts.length) {
            contactsTable.innerHTML = `<tr>
          <td colspan="5">no contacts loaded</td>
        </tr>`;
        }
        
    });

    hideAddContactForm();
};


click(addContactButton, () => {
    setCss(addContactForm, 'display', 'block');
    setCss(addContactButton, 'visibility', 'hidden');
});

click(getElement('#cancel'), hideAddContactForm);

const loadButton = document.querySelector('#load');

click(loadButton, async () => {
    // addNewContact();
    try {
        const r = await fetch('storedContacts.json');
        if (!r.ok) {
            throw new Error(`${r.status} - ${r.statusText}`);
        }
        const t = await r.json();
        console.log(t);

        t.forEach((c) => {
            addNewContact(c.first, c.last, c.email, c.phone);
         });
        
    } catch (e) {
        console.error('oops', e);
        //todo:message box
    }
});


    




