// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    // Update URL hash
                    history.pushState(null, null, '#' + targetId);
                }
            });
        });
    });
    
    // Handle initial hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        const link = document.querySelector(`a[href="#${hash}"]`);
        if (link) link.click();
    }
    
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });
});

// Code tabs functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabGroup = button.parentElement;
        const tabContents = tabGroup.parentElement.querySelectorAll('.tab-content');
        const targetTab = button.getAttribute('data-tab');
        
        // Update active states
        tabGroup.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        
        // Show target content
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === targetTab) {
                content.classList.add('active');
            }
        });
    });
});

// Demo request functionality
function sendDemoRequest() {
    const token = document.getElementById('demo-token').value;
    const firstname = document.getElementById('demo-firstname').value;
    const lastname = document.getElementById('demo-lastname').value;
    const birthdate = document.getElementById('demo-birthdate').value;
    
    if (!token || !firstname || !lastname || !birthdate) {
        alert('Please fill in all fields');
        return;
    }
    
    const request = {
        order: {
            clientOrderId: `DEMO-${Date.now()}`,
            subject: {
                FirstName: firstname,
                LastName: lastname,
                Birthdate: birthdate
            },
            product: {
                category: "CRIMINAL",
                felonyYears: 7,
                felonyScope: "STRICT_SCOPE",
                misdemeanorYears: 7,
                misdemeanorScope: "STRICT_SCOPE"
            },
            jurisdiction: {
                county: "Demo County",
                state: "CA",
                country: "United States"
            }
        }
    };
    
    // Update request preview
    document.getElementById('demo-request').innerHTML = 
        `<code class="language-json">${JSON.stringify(request, null, 2)}</code>`;
    Prism.highlightElement(document.querySelector('#demo-request code'));
    
    // Simulate response
    setTimeout(() => {
        const response = {
            order: {
                id: `order_${Math.random().toString(36).substr(2, 9)}`,
                clientOrderId: request.order.clientOrderId,
                status: "COMPLETE",
                substatus: "CLEAR",
                orderDate: new Date().toISOString(),
                dueDate: new Date(Date.now() + 86400000).toISOString(),
                subject: request.order.subject,
                product: request.order.product,
                cases: []
            }
        };
        
        document.getElementById('demo-response').innerHTML = 
            `<code class="language-json">${JSON.stringify(response, null, 2)}</code>`;
        Prism.highlightElement(document.querySelector('#demo-response code'));
    }, 1500);
}

// Verification details display
function showVerificationDetails(type) {
    const detailsContainer = document.getElementById('verification-details');
    
    const details = {
        employment: {
            title: 'Employment Verification',
            icon: 'fas fa-briefcase',
            description: 'Verify employment history including positions, dates, salary, and eligibility for rehire.',
            fields: [
                { name: 'employer', type: 'string', required: true, description: 'Company name' },
                { name: 'title', type: 'string', required: true, description: 'Job title' },
                { name: 'employedFrom', type: 'date', required: true, description: 'Start date' },
                { name: 'employedTo', type: 'date', required: false, description: 'End date (or current)' },
                { name: 'address1', type: 'string', required: false, description: 'Company address' },
                { name: 'city', type: 'string', required: false, description: 'Company city' },
                { name: 'state', type: 'string', required: false, description: 'Company state' }
            ],
            example: {
                order: {
                    clientOrderId: "EMP-VER-001",
                    subject: {
                        FirstName: "Jane",
                        LastName: "Smith",
                        Birthdate: "1985-03-15"
                    },
                    product: {
                        category: "EMPLOYMENT_VERIFICATION"
                    },
                    employmentVerification: {
                        employer: "Tech Corp Inc",
                        title: "Senior Developer",
                        employedFrom: "2020-01-15",
                        employedTo: "2023-06-30",
                        city: "Seattle",
                        state: "WA"
                    }
                }
            }
        },
        education: {
            title: 'Education Verification',
            icon: 'fas fa-graduation-cap',
            description: 'Confirm degrees, certifications, enrollment dates, and graduation status.',
            fields: [
                { name: 'schoolName', type: 'string', required: true, description: 'Institution name' },
                { name: 'degree', type: 'string', required: true, description: 'Degree/Certificate' },
                { name: 'major', type: 'string', required: false, description: 'Field of study' },
                { name: 'graduationDate', type: 'date', required: false, description: 'Graduation date' },
                { name: 'startDate', type: 'date', required: false, description: 'Enrollment start' },
                { name: 'endDate', type: 'date', required: false, description: 'Enrollment end' }
            ]
        },
        address: {
            title: 'Address Verification',
            icon: 'fas fa-home',
            description: 'Validate current and previous residential addresses.',
            fields: [
                { name: 'street1', type: 'string', required: true, description: 'Street address' },
                { name: 'street2', type: 'string', required: false, description: 'Apt/Suite' },
                { name: 'city', type: 'string', required: true, description: 'City' },
                { name: 'state', type: 'string', required: true, description: 'State' },
                { name: 'postalCode', type: 'string', required: true, description: 'ZIP code' },
                { name: 'startDate', type: 'date', required: false, description: 'Residency start' },
                { name: 'endDate', type: 'date', required: false, description: 'Residency end' }
            ]
        },
        license: {
            title: 'License Verification',
            icon: 'fas fa-id-card',
            description: 'Verify professional licenses, certifications, and regulatory compliance.',
            fields: [
                { name: 'licenseType', type: 'string', required: true, description: 'Type of license' },
                { name: 'licenseNumber', type: 'string', required: true, description: 'License number' },
                { name: 'issuingAuthority', type: 'string', required: true, description: 'Issuing body' },
                { name: 'issueDate', type: 'date', required: false, description: 'Issue date' },
                { name: 'expirationDate', type: 'date', required: false, description: 'Expiration date' },
                { name: 'state', type: 'string', required: true, description: 'Issuing state' }
            ]
        }
    };
    
    const detail = details[type];
    if (!detail) return;
    
    detailsContainer.innerHTML = `
        <div class="verification-detail-card">
            <h3><i class="${detail.icon}"></i> ${detail.title}</h3>
            <p>${detail.description}</p>
            
            <h4>Required Fields:</h4>
            <table class="param-table">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${detail.fields.map(field => `
                        <tr>
                            <td><code>${field.name}</code></td>
                            <td>${field.type}</td>
                            <td>${field.required ? 'Yes' : 'No'}</td>
                            <td>${field.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            ${detail.example ? `
                <h4>Example Request:</h4>
                <pre><code class="language-json">${JSON.stringify(detail.example, null, 2)}</code></pre>
            ` : ''}
        </div>
    `;
    
    // Re-highlight code
    Prism.highlightAllUnder(detailsContainer);
    
    // Scroll to details
    detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Playground functionality
function updatePlaygroundTemplate() {
    const category = document.getElementById('playground-category').value;
    const specificFields = document.getElementById('category-specific-fields');
    
    const templates = {
        CRIMINAL: `
            <div class="control-group">
                <label>Search Parameters:</label>
                <select id="pg-felony-years">
                    <option value="7">7 Years - Felony</option>
                    <option value="10">10 Years - Felony</option>
                </select>
                <select id="pg-felony-scope">
                    <option value="STRICT_SCOPE">Strict Scope</option>
                    <option value="EXTENDED_SCOPE">Extended Scope</option>
                    <option value="BROAD_SCOPE">Broad Scope</option>
                </select>
            </div>
            <div class="control-group">
                <label>Jurisdiction:</label>
                <input type="text" id="pg-county" placeholder="County">
                <input type="text" id="pg-state" placeholder="State (e.g., CA)">
            </div>
        `,
        EMPLOYMENT_VERIFICATION: `
            <div class="control-group">
                <label>Employment Details:</label>
                <input type="text" id="pg-employer" placeholder="Employer Name">
                <input type="text" id="pg-title" placeholder="Job Title">
                <input type="date" id="pg-emp-from" placeholder="Start Date">
                <input type="date" id="pg-emp-to" placeholder="End Date">
            </div>
        `,
        SSN_TRACE: `
            <div class="control-group">
                <label>SSN Information:</label>
                <input type="text" id="pg-ssn" placeholder="SSN (XXX-XX-XXXX)">
            </div>
        `,
        NATCRIM: `
            <div class="control-group">
                <label>Search Profile:</label>
                <select id="pg-profile">
                    <option value="standard">Standard Search</option>
                    <option value="enhanced">Enhanced Search</option>
                </select>
            </div>
        `
    };
    
    specificFields.innerHTML = templates[category] || '';
    updatePlaygroundRequest();
}

function updatePlaygroundRequest() {
    const category = document.getElementById('playground-category').value;
    const firstname = document.getElementById('pg-firstname').value || 'John';
    const lastname = document.getElementById('pg-lastname').value || 'Doe';
    const birthdate = document.getElementById('pg-birthdate').value || '1990-01-01';
    
    let request = {
        order: {
            clientOrderId: `TEST-${Date.now()}`,
            subject: {
                FirstName: firstname,
                LastName: lastname,
                Birthdate: birthdate
            },
            product: {
                category: category
            }
        }
    };
    
    // Add category-specific fields
    if (category === 'CRIMINAL') {
        request.order.product.felonyYears = 7;
        request.order.product.felonyScope = "STRICT_SCOPE";
        request.order.jurisdiction = {
            county: document.getElementById('pg-county')?.value || "King",
            state: document.getElementById('pg-state')?.value || "WA",
            country: "United States"
        };
    }
    
    document.getElementById('playground-request').innerHTML = 
        `<code class="language-json">${JSON.stringify(request, null, 2)}</code>`;
    Prism.highlightElement(document.querySelector('#playground-request code'));
}

function executePlaygroundRequest() {
    updatePlaygroundRequest();
    
    // Simulate response based on category
    const category = document.getElementById('playground-category').value;
    let response = {
        order: {
            id: `order_${Math.random().toString(36).substr(2, 9)}`,
            status: "COMPLETE",
            orderDate: new Date().toISOString()
        }
    };
    
    if (category === 'CRIMINAL') {
        response.order.substatus = Math.random() > 0.7 ? "RECORD" : "CLEAR";
        if (response.order.substatus === "RECORD") {
            response.order.cases = [{
                caseNumber: "2023-CR-12345",
                courtFiledIn: "COUNTY DISTRICT COURT",
                charges: [{
                    chargeDescription: "TRAFFIC VIOLATION",
                    chargeType: "MISDEMEANOR",
                    disposition: "GUILTY"
                }]
            }];
        } else {
            response.order.cases = [];
        }
    } else if (category === 'EMPLOYMENT_VERIFICATION') {
        response.order.substatus = "VERIFIED_SUCCESS";
        response.order.employmentVerification = {
            employerVerified: true,
            titleVerified: true,
            employedFromVerified: true,
            employedToVerified: true
        };
    }
    
    document.getElementById('playground-response').innerHTML = 
        `<code class="language-json">${JSON.stringify(response, null, 2)}</code>`;
    Prism.highlightElement(document.querySelector('#playground-response code'));
}

// Auto-update playground on input
document.addEventListener('input', (e) => {
    if (e.target.id && e.target.id.startsWith('pg-')) {
        updatePlaygroundRequest();
    }
});

// Initialize playground
updatePlaygroundTemplate();