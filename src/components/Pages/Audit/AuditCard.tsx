import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import AuditCardLayout from 'components/Layout/AuditLayout/AuditCardLayout';
import { ApiEndpointConfig } from 'enum/apiEndpoints';

interface AuditCardProps {
  endpoint: ApiEndpointConfig;
  className: string;
}

const AuditCard: React.FC<AuditCardProps> = (prop) => {
  const data = useSelector((state: RootState) => state.search[prop.endpoint.index as keyof typeof state.search]);

  if (!data) return null;

  return (
    <AuditCardLayout {...prop} iconName={prop.endpoint.icon as React.ComponentProps<typeof AuditCardLayout>['iconName']} title={prop.endpoint.title}>
          {prop.endpoint.renderContent(data)}
    </AuditCardLayout>
  );
};
export default AuditCard;
