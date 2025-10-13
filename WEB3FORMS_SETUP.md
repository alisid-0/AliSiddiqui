# Web3Forms Setup Guide

## Get Your Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started for Free"
3. Enter your email address where you want to receive form submissions
4. Check your email and verify your address
5. Copy your **Access Key** from the Web3Forms dashboard

## Configure Your Contact Form

1. Open `src/components/Contact.jsx`
2. Find line 35 where it says: `access_key: 'YOUR_ACCESS_KEY_HERE'`
3. Replace `'YOUR_ACCESS_KEY_HERE'` with your actual Web3Forms access key

Example:
```javascript
access_key: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6', // Your actual key
```

## Features

✅ **No backend required** - Web3Forms handles all email delivery  
✅ **Free tier available** - Up to 250 submissions per month  
✅ **Spam protection** - Built-in spam filtering  
✅ **Email notifications** - Instant notifications to your email  
✅ **Modern UI** - Beautiful, responsive form design matching your portfolio theme

## Form Fields

The contact form includes:
- **Name** - Visitor's name
- **Email** - Visitor's email address
- **Message** - Their message or inquiry

## Success & Error Handling

The form includes:
- Loading state during submission
- Success message after successful submission
- Error message if submission fails
- Auto-clearing messages after 5 seconds
- Form reset after successful submission

## Testing

After adding your access key:
1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email for the submission

## Additional Configuration (Optional)

You can customize the form further by:
- Adding more fields (phone, company, etc.)
- Customizing email templates on Web3Forms dashboard
- Setting up auto-replies to visitors
- Adding custom webhooks for integrations

## Support

If you need help:
- Web3Forms Documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- Web3Forms Support: [https://web3forms.com/support](https://web3forms.com/support)

