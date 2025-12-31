export default function birthdayTemplate({ studentName }) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <p style="margin: 0 0 15px 0; font-size: 14px;">
        Hello,
      </p>
      
      <p style="margin: 0 0 15px 0; font-size: 14px;">
        Today is ${studentName || "your child"}'s birthday.
      </p>
      
      <p style="margin: 0 0 15px 0; font-size: 14px;">
        On behalf of SURE FOUNDATION GROUP OF SCHOOL (SFGS), we wish ${studentName || "your child"} a wonderful year ahead filled with growth and learning.
      </p>
      
      <p style="margin: 20px 0 0 0; font-size: 14px;">
        Best regards,<br/>
        SURE FOUNDATION GROUP OF SCHOOL (SFGS)
      </p>
      
    </div>
  `;
}