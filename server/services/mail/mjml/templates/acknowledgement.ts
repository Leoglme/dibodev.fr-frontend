import { websiteName } from '~~/server/services/mail/mail.config'

export default `
<mj-section text-align="center" padding="0px 12px">
  <mj-column>
    <mj-text align="left" line-height="40px" padding-right="0" padding-left="0px" padding-bottom="24px" font-weight="700" font-size="24px">
      Accusé de réception sur ${websiteName}
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Bonjour {{fullName}},
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      J'ai bien reçu votre demande de contact et je vous répondrai au plus vite.
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      En attendant, vous pouvez me contacter au 06 42 19 38 12.
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Cordialement,<br>
      Dibodev - Développeur freelance
    </mj-text>
  </mj-column>
</mj-section>
`
