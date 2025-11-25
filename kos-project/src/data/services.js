export const services = [
    {
        id: 'driving-licence',
        title: 'Driving Licence & All RTO Services',
        description: 'Apply, renew, or update your Driving Licence easily. All RTO works handled with care and accuracy.',
        icon: '🚗',
        category: 'RTO',
        fullDescription: 'We handle all RTO related services including Learner\'s Licence, Permanent Driving Licence, Renewal, Address Change, and Vehicle Registration.',
        steps: [
            'Submit your details and documents',
            'We verify and apply on your behalf',
            'Book slot for test (if applicable)',
            'Receive your licence at home'
        ],
        requiredDocs: [
            'Aadhaar Card',
            'Pan Card',
            'Passport size photo',
            'Signature',
            'Old Licence (for renewal)'
        ]
    },
    {
        id: 'fssai-license',
        title: 'FSSAI License',
        description: 'Get your food business registered under FSSAI quickly and legally with our expert support.',
        icon: '🍴',
        category: 'Business',
        fullDescription: 'Mandatory registration for all food business operators. We help you get your FSSAI Basic Registration or State License.',
        steps: [
            'Provide business details',
            'We file the application',
            'Respond to queries (if any)',
            'Receive license via email'
        ],
        requiredDocs: [
            'Aadhaar Card of Owner',
            'Passport size photo',
            'Business Address Proof',
            'Business Name'
        ]
    },
    {
        id: 'pan-card',
        title: 'PAN Card & PAN-Aadhaar Link',
        description: 'Apply for a new PAN card or link your existing one with Aadhaar – hassle-free and fast.',
        icon: '🪪',
        category: 'Identity',
        fullDescription: 'New PAN Card application, Correction in PAN Card, or Linking PAN with Aadhaar to avoid penalties.',
        steps: [
            'Fill the simple form',
            'Upload documents',
            'Payment processing',
            'Get digital PAN in 3 days, physical in 10 days'
        ],
        requiredDocs: [
            'Aadhaar Card',
            'Passport size photo',
            'Signature'
        ]
    },
    {
        id: 'aadhaar-services',
        title: 'Aadhaar, Ayushman, E-Shram & Voter ID',
        description: 'All essential government cards made simple – apply, update, or print with our help.',
        icon: '🧾',
        category: 'Identity',
        fullDescription: 'Assistance for all government ID cards including Aadhaar address update, PVC card ordering, Voter ID application, and Ayushman Bharat card.',
        steps: [
            'Visit us or send details online',
            'Biometric verification (if needed)',
            'Application submission',
            'Download/Print card'
        ],
        requiredDocs: [
            'Proof of Identity',
            'Proof of Address',
            'Mobile Number linked to Aadhaar'
        ]
    },
    {
        id: 'pf-passport',
        title: 'PF (UAN) & Passport Services',
        description: 'Manage your PF (UAN) details or apply for a passport – we guide you step-by-step.',
        icon: '💼',
        category: 'Documents',
        fullDescription: 'EPF withdrawal, KYC update, UAN activation. Fresh Passport application and Re-issue services.',
        steps: [
            'Consultation for requirement',
            'Document preparation',
            'Online application filing',
            'Appointment booking'
        ],
        requiredDocs: [
            'Aadhaar Card',
            'PAN Card',
            'Bank Passbook',
            '10th Marksheet (for Passport)'
        ]
    },
    {
        id: 'ticket-booking',
        title: 'Ticket Booking & Resume Creation',
        description: 'Book bus, train, or flight tickets instantly and get a professional resume designed for you.',
        icon: '🎟️',
        category: 'Services',
        fullDescription: 'Instant booking for IRCTC trains, buses, and flights. Professional CV/Resume making for job applications.',
        steps: [
            'Provide travel dates/Job details',
            'Select preference',
            'Instant booking/Draft creation',
            'Receive ticket/Resume PDF'
        ],
        requiredDocs: [
            'ID Proof for travel',
            'Personal & Education details for Resume'
        ]
    },
    {
        id: 'domicile-income',
        title: 'Domicile & Income Certificate',
        description: 'Get your domicile or income certificate online with verified document assistance.',
        icon: '🏠',
        category: 'Documents',
        fullDescription: 'State government services for Income, Caste, and Domicile certificates required for admissions and jobs.',
        steps: [
            'Document verification',
            'Online application',
            'Talathi/Tehsil verification',
            'Certificate issuance'
        ],
        requiredDocs: [
            'Aadhaar Card',
            'Ration Card',
            'School Leaving Certificate',
            'Self Declaration'
        ]
    },
    {
        id: 'admission-forms',
        title: 'College Admission & Online Forms',
        description: 'Fill admission, scholarship, or other important forms easily and correctly.',
        icon: '🏫',
        category: 'Education',
        fullDescription: 'Error-free filling of college admission forms, scholarship applications, and competitive exam forms.',
        steps: [
            'Share form link/details',
            'Provide personal & academic info',
            'Live form filling',
            'Confirmation receipt'
        ],
        requiredDocs: [
            'Photo & Signature',
            'Mark sheets',
            'Caste Certificate (if applicable)'
        ]
    },
    {
        id: 'udyam-registration',
        title: 'Udyam Registration',
        description: 'Register your MSME business under Udyam and get official government recognition with ease.',
        icon: '🏭',
        category: 'Business',
        fullDescription: 'Udyam Registration (formerly MSME/Udyog Aadhaar) is mandatory for all Micro, Small and Medium Enterprises. Get official recognition, access to government schemes, subsidies, and loan benefits.',
        steps: [
            'Provide business details and Aadhaar',
            'Submit required documents',
            'We file the online application',
            'Receive Udyam Registration Certificate'
        ],
        requiredDocs: [
            'Aadhaar Card of Owner',
            'PAN Card',
            'Business Address Proof',
            'Bank Account Details',
            'Business Details (Investment & Turnover)'
        ]
    },
    {
        id: 'cyber-services',
        title: 'All Cyber and Digital Services',
        description: 'From document scanning to online registration – we handle all digital work for you.',
        icon: '💻',
        category: 'Services',
        fullDescription: 'Print, Scan, Xerox, Lamination, Email, Money Transfer, and all other internet cafe services.',
        steps: [
            'Visit our center',
            'Instant service',
            'Pay and go'
        ],
        requiredDocs: [
            'As per service requirement'
        ]
    }
];

export const categories = ['All', 'RTO', 'Identity', 'Documents', 'Business', 'Education', 'Services'];
