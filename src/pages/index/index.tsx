import React, { useEffect, useState } from 'react';
import { caddy } from '../../lib/api';
import { Server } from '../../components/Server';

const getServers = async () => {
  const config = await caddy.getConfig();
  const { apps } = config;
  const { servers } = apps.http;
  return Object.entries(servers).map(([key, server]: any) => {
    server.id = key;
    return server;
  })
};

const useReady = fn => {
  useEffect(() => void (fn()), []);
};

const Index = () => {
  const [servers, setServers] = useState([]);
  useReady(async () => {
    const _servers = await getServers();
    setServers(_servers);
  });
  return (
    <div>
      <h2>Index</h2>
      <div>
        {
          servers.map((server, i) => <Server key={i} server={server} />)
        }
      </div>
    </div>
  );
};

export default Index;