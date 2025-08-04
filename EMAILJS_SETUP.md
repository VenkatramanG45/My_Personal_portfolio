# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Save the template
5. Note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Create Environment File
Create a `.env` file in the root directory with:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Update Contact Details
In `src/components/Contact.jsx`, update line 40:
```javascript
to_email: "your-actual-email@example.com", // Replace with your email
```

## Step 7: Test
1. Restart your dev server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and test sending an email

## Troubleshooting
- Make sure all environment variables are set correctly
- Check that your EmailJS account is verified
- Ensure your email service is properly connected
- Check browser console for any error messages 