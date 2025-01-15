import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ContactsTab = (props: SvgProps) => (
  <Svg viewBox="0 0 26 26" width="26px" height="26px" {...props}>
    <Path
      fill={props.color}
      d="M6.76 2.08a4.685 4.685 0 0 0-4.68 4.68v12.48c0 2.581 2.1 4.68 4.68 4.68h12.48q.264-.001.52-.031V2.111a5 5 0 0 0-.52-.031zm14.04.273V7.28h3.12v-.52a4.68 4.68 0 0 0-3.12-4.407M11.44 6.24c3.727 0 6.76 3.033 6.76 6.76s-3.033 6.76-6.76 6.76S4.68 16.727 4.68 13s3.033-6.76 6.76-6.76m0 1.04A5.727 5.727 0 0 0 5.72 13a5.7 5.7 0 0 0 1.464 3.808c1.079-1.091 2.619-1.728 4.256-1.728 1.633 0 3.179.635 4.258 1.726A5.7 5.7 0 0 0 17.16 13a5.727 5.727 0 0 0-5.72-5.72m9.36 1.04v4.16h3.12V8.32zm-9.36 1.3c1.29 0 2.34 1.05 2.34 2.34s-1.05 2.34-2.34 2.34a2.343 2.343 0 0 1-2.34-2.34c0-1.29 1.05-2.34 2.34-2.34m9.36 3.9v4.16h3.12v-4.16zm0 5.2v4.927a4.68 4.68 0 0 0 3.12-4.407v-.52z"
    />
  </Svg>
);
export default ContactsTab;
