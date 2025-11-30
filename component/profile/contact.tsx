import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';

export default function ProfileContact({
  payload,
}: PropsWithChildren<{ payload: IProfile.Contact }>) {
  let iconElement: React.ReactNode = null;

  if (payload.image) {
    iconElement = (
      <img src={payload.image} alt={payload.title ?? 'contact'} style={{ width: 18, height: 18 }} />
    );
  } else if (payload.icon) {
    iconElement = <FontAwesomeIcon icon={payload.icon} />;
  }

  return (
    <Row className="pb-2">
      <Col xs={1} className="text-right">
        {iconElement}
      </Col>
      <Col xs="auto">{createLink(payload)}</Col>
    </Row>
  );
}

function createLink(payload: IProfile.Contact) {
  if (payload.badge) {
    return <Badge color="light">{payload.title || payload.link}</Badge>;
  }

  if (payload.link) {
    return <HrefTargetBlank url={payload.link} text={payload.title} />;
  }

  return <span>{payload.title}</span>;
}
