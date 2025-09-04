import { websiteName } from '~~/server/services/mail/mail.config'
import { DateTime } from 'luxon'

export default `
<mj-section background-color="#ffffff" padding="20px">
  <mj-column>
    <mj-text font-size="12px" align="center">
      © ${DateTime.now().year} ${websiteName}. Tous droits réservés.
    </mj-text>
  </mj-column>
</mj-section>
`
