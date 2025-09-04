import { websiteName } from '~~/server/services/mail/mail.config'

export default `
<mj-section text-align="center" padding="0px 12px">
  <mj-column>
    <mj-text align="left" line-height="40px" padding-right="0" padding-left="0px" padding-bottom="24px" font-weight="700" font-size="24px">
      Nouveau contact sur ${websiteName}
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Nom complet: {{fullName}}
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Email: {{email}}
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Type de projet: {{projectType}}
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Nombre de pages: {{pagesRange}}
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Budget: {{budget}} €
    </mj-text>

    <mj-text padding="0" padding-left="0px" align="left" line-height="28px" padding-bottom="8px">
      Message: {{message}}
    </mj-text>
  </mj-column>
</mj-section>
`
