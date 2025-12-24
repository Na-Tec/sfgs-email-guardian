// birthdayTemplate.js
// Export a function that returns the HTML for the birthday email

export default function birthdayTemplate({ studentName }) {
  return `
    <div style="background: #f8f6f3; font-family: Georgia, 'Times New Roman', serif; padding: 0; margin: 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f8f6f3;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
              <!-- School Logo -->
              <tr>
                <td style="padding: 24px 0 0 0; text-align: center; background: #fff;">
                  <img src='https://portal.sfgs.com.ng/img/logo.JPG' alt="SFGS Logo" width="80" height="80" style="border-radius: 50%; box-shadow: 0 2px 8px rgba(74,15,63,0.10); margin-bottom: 8px;" />
                </td>
              </tr>
              <tr>
                <td style="background: linear-gradient(135deg, #4a0f3f 0%, #764ba2 100%); padding: 40px 40px 35px; text-align: center; position: relative;">
                  <div style="width: 100%; display: flex; justify-content: center; gap: 12px;">
                    <!-- SVG Balloons -->
                    <svg width='32' height='80' viewBox='0 0 32 80' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='16' cy='20' rx='14' ry='18' fill='#ff5a5f'/>
                      <path d='M16 38 Q18 50 12 60 Q8 68 16 80' stroke='#b23b3b' stroke-width='2' fill='none'/>
                    </svg>
                    <svg width='28' height='70' viewBox='0 0 28 70' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='14' cy='16' rx='12' ry='14' fill='#fbbf24'/>
                      <path d='M14 30 Q10 45 18 60 Q22 66 14 70' stroke='#b28b1e' stroke-width='2' fill='none'/>
                    </svg>
                    <svg width='24' height='60' viewBox='0 0 24 60' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='12' cy='12' rx='10' ry='10' fill='#34d399'/>
                      <path d='M12 22 Q16 35 8 50 Q4 56 12 60' stroke='#1e7c4a' stroke-width='2' fill='none'/>
                    </svg>
                    <svg width='28' height='70' viewBox='0 0 28 70' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='14' cy='16' rx='12' ry='14' fill='#6366f1'/>
                      <path d='M14 30 Q18 45 10 60 Q6 66 14 70' stroke='#3730a3' stroke-width='2' fill='none'/>
                    </svg>
                    <svg width='32' height='80' viewBox='0 0 32 80' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='16' cy='20' rx='14' ry='18' fill='#f472b6'/>
                      <path d='M16 38 Q12 50 20 60 Q24 68 16 80' stroke='#a21caf' stroke-width='2' fill='none'/>
                    </svg>
                  </div>
                  <h1 style="margin: 24px 0 0 0; color: #ffffff; font-size: 32px; font-weight: normal; letter-spacing: 1px;">
                    Happy Birthday
                  </h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 40px 40px 30px; text-align: center;">
                  <p style="margin: 0 0 8px 0; color: #888888; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">
                    Celebrating
                  </p>
                  <p style="margin: 0; color: #4a0f3f; font-size: 28px; font-weight: bold;">
                    ${studentName || "your child"}
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 40px 30px; text-align: center;">
                  <div style="font-size: 56px; line-height: 1;">🎂</div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 40px 40px; text-align: center;">
                  <p style="margin: 0; color: #555555; font-size: 16px; line-height: 1.7;">
                    On behalf of everyone at <strong style='color:#4a0f3f;'>SURE FOUNDATION GROUP OF SCHOOL (SFGS)</strong>, we wish your child a wonderful birthday filled with joy and happiness.
                  </p>
                  <p style="margin: 20px 0 0 0; color: #555555; font-size: 16px; line-height: 1.7;">
                    May this new year bring growth, learning, and many cherished moments.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 40px 20px; text-align: center;">
                  <div style="width: 100%; display: flex; justify-content: center; gap: 8px;">
                    <svg width='20' height='40' viewBox='0 0 20 40' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='10' cy='10' rx='8' ry='8' fill='#ff5a5f'/>
                      <path d='M10 18 Q12 28 6 40' stroke='#b23b3b' stroke-width='1.5' fill='none'/>
                    </svg>
                    <svg width='18' height='36' viewBox='0 0 18 36' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='9' cy='8' rx='7' ry='7' fill='#fbbf24'/>
                      <path d='M9 15 Q7 25 12 36' stroke='#b28b1e' stroke-width='1.5' fill='none'/>
                    </svg>
                    <svg width='16' height='32' viewBox='0 0 16 32' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='8' cy='7' rx='6' ry='6' fill='#34d399'/>
                      <path d='M8 13 Q10 22 4 32' stroke='#1e7c4a' stroke-width='1.5' fill='none'/>
                    </svg>
                    <svg width='18' height='36' viewBox='0 0 18 36' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='9' cy='8' rx='7' ry='7' fill='#6366f1'/>
                      <path d='M9 15 Q11 25 6 36' stroke='#3730a3' stroke-width='1.5' fill='none'/>
                    </svg>
                    <svg width='20' height='40' viewBox='0 0 20 40' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'>
                      <ellipse cx='10' cy='10' rx='8' ry='8' fill='#f472b6'/>
                      <path d='M10 18 Q8 28 14 40' stroke='#a21caf' stroke-width='1.5' fill='none'/>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 40px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tr>
                      <td style="border-top: 1px solid #eeeeee;"></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px 40px 40px; text-align: center;">
                  <p style="margin: 0; color: #888888; font-size: 14px;">
                    Warm regards,
                  </p>
                  <p style="margin: 8px 0 0 0; color: #4a0f3f; font-size: 16px; font-weight: bold;">
                    SURE FOUNDATION GROUP OF SCHOOL (SFGS)
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}
