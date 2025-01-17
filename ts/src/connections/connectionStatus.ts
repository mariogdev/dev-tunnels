// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Tunnel client or host connection status.
 */
export enum ConnectionStatus {
    /**
     * The connection has not started yet. This is the initial status.
     */
    None = 'none',

    /**
     * Connecting (if changed from None) or reconnecting (if changed from Connected) to the tunnel.
     */
    Connecting = 'connecting',

    /**
     * Connecting and refreshing the tunnel access token to connect with.
     */
    RefreshingTunnelAccessToken = 'refreshingTunnelAccessToken',

    /**
     * Connected to the tunnel.
     */
    Connected = 'connected',

    /**
     * Disconnected from the tunnel and could not reconnect either due to disposal, service down, tunnel deleted, or token expiration. This is the final status.
     */
    Disconnected = 'disconnected',

    /**
     * Refreshing tunnel host public key. 
     * This may happen when a client is connecting to a tunnel with a stale host public key. SDK client will try to fetch a fresh tunnel from the tunnelManagementClient.
     */
    RefreshingTunnelHostPublicKey = 'refreshingTunnelHostPublicKey',
}
