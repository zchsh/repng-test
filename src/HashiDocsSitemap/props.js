const props = [
  {
    name: 'order',
    type: 'json',
    description: 'Collection of docs for the sitemap',
    value: [
      {
        title: 'Getting Started',
        docs: ['docs/install/index.html']
      },
      {
        title: 'Configuration',
        docs: [
          'docs/configuration/telemetry.html',
          'docs/configuration/seal/index.html',
          'docs/configuration/seal/pkcs11.html',
          'docs/configuration/seal/awskms.html',
          'docs/configuration/seal/azurekeyvault.html',
          'docs/configuration/listener/index.html',
          'docs/configuration/listener/tcp.html',
          'docs/configuration/ui/index.html'
        ]
      }
    ]
  },
  {
    name: 'data',
    type: 'json',
    description: 'Collection of all docs',
    value: [
      {
        path: 'docs/configuration/ui/index.html',
        data: {
          page_title: 'UI - Configuration',
          sidebar_title: '<tt>ui</tt>',
          sidebar_current: 'docs-configuration-ui'
        }
      },
      {
        path: 'docs/configuration/listener/tcp.html',
        data: {
          page_title: 'TCP - Listeners - Configuration',
          sidebar_title: 'TCP',
          sidebar_current: 'docs-configuration-listener-tcp'
        }
      },
      {
        path: 'docs/configuration/listener/index.html',
        data: {
          page_title: 'Listeners - Configuration',
          sidebar_title: '<tt>listener</tt>',
          sidebar_current: 'docs-configuration-listener'
        }
      },
      {
        path: 'docs/configuration/index.html',
        data: {
          page_title: 'Server Configuration',
          sidebar_title: 'Configuration',
          sidebar_current: 'docs-configuration'
        }
      },
      {
        path: 'docs/configuration/telemetry.html',
        data: {
          page_title: 'Telemetry - Configuration',
          sidebar_title: '<tt>telemetry</tt>',
          sidebar_current: 'docs-configuration-telemetry'
        }
      },
      {
        path: 'docs/configuration/seal/index.html',
        data: {
          page_title: 'Seals - Configuration',
          sidebar_title: '<tt>seal</tt>',
          sidebar_current: 'docs-configuration-seal'
        }
      },
      {
        path: 'docs/configuration/seal/pkcs11.html',
        data: {
          page_title: 'PKCS11 - Seals - Configuration',
          sidebar_title: 'HSM PKCS11 <sup>ENT</sup>',
          sidebar_current: 'docs-configuration-seal-pkcs11'
        }
      },
      {
        path: 'docs/configuration/seal/awskms.html',
        data: {
          page_title: 'AWS KMS - Seals - Configuration',
          sidebar_title: 'AWS KMS <sup>ENT</sup>',
          sidebar_current: 'docs-configuration-seal-awskms'
        }
      },
      {
        path: 'docs/configuration/seal/azurekeyvault.html',
        data: {
          page_title: 'Azure Key Vault - Seals - Configuration',
          sidebar_title: 'Azure Key Vault <sup>ENT</sup>',
          sidebar_current: 'docs-configuration-seal-azurekeyvault'
        }
      },
      {
        path: 'docs/configuration/seal/gcpckms.html',
        data: {
          page_title: 'GCP Cloud KMS - Seals - Configuration',
          sidebar_title: 'GCP Cloud KMS <sup>ENT</sup>',
          sidebar_current: 'docs-configuration-seal-gcpckms'
        }
      },
      {
        path: 'docs/configuration/storage/zookeeper.html',
        data: {
          page_title: 'Zookeeper - Storage Backends - Configuration',
          sidebar_title: 'Zookeeper',
          sidebar_current: 'docs-configuration-storage-zookeeper'
        }
      },
      {
        path: 'docs/configuration/storage/postgresql.html',
        data: {
          page_title: 'PostgreSQL - Storage Backends - Configuration',
          sidebar_title: 'PostgreSQL',
          sidebar_current: 'docs-configuration-storage-postgresql'
        }
      },
      {
        path: 'docs/configuration/storage/alicloudoss.html',
        data: {
          page_title: 'Alicloud OSS - Storage Backends - Configuration',
          sidebar_title: 'AliCloud OSS',
          sidebar_current: 'docs-configuration-storage-alicloudoss'
        }
      },
      {
        path: 'docs/configuration/storage/couchdb.html',
        data: {
          page_title: 'CouchDB - Storage Backends - Configuration',
          sidebar_title: 'CouchDB',
          sidebar_current: 'docs-configuration-storage-couchdb'
        }
      },
      {
        path: 'docs/configuration/storage/cockroachdb.html',
        data: {
          page_title: 'CockroachDB - Storage Backends - Configuration',
          sidebar_title: 'CockroachDB',
          sidebar_current: 'docs-configuration-storage-cockroachdb'
        }
      },
      {
        path: 'docs/configuration/storage/google-cloud-spanner.html',
        data: {
          page_title: 'Google Cloud Spanner - Storage Backends - Configuration',
          sidebar_title: 'Google Cloud Spanner',
          sidebar_current: 'docs-configuration-storage-spanner'
        }
      },
      {
        path: 'docs/configuration/storage/swift.html',
        data: {
          page_title: 'Swift - Storage Backends - Configuration',
          sidebar_title: 'Swift',
          sidebar_current: 'docs-configuration-storage-swift'
        }
      },
      {
        path: 'docs/configuration/storage/index.html',
        data: {
          page_title: 'Storage Backends - Configuration',
          sidebar_title: '<tt>storage</tt>',
          sidebar_current: 'docs-configuration-storage'
        }
      },
      {
        path: 'docs/configuration/storage/consul.html',
        data: {
          page_title: 'Consul - Storage Backends - Configuration',
          sidebar_title: 'Consul',
          sidebar_current: 'docs-configuration-storage-consul'
        }
      },
      {
        path: 'docs/configuration/storage/google-cloud-storage.html',
        data: {
          page_title: 'Google Cloud Storage - Storage Backends - Configuration',
          sidebar_title: 'Google Cloud Storage',
          sidebar_current: 'docs-configuration-storage-google-cloud'
        }
      },
      {
        path: 'docs/configuration/storage/in-memory.html',
        data: {
          page_title: 'In-Memory - Storage Backends - Configuration',
          sidebar_title: 'In-Memory',
          sidebar_current: 'docs-configuration-storage-in-memory'
        }
      },
      {
        path: 'docs/configuration/storage/filesystem.html',
        data: {
          page_title: 'Filesystem - Storage Backends - Configuration',
          sidebar_title: 'Filesystem',
          sidebar_current: 'docs-configuration-storage-filesystem'
        }
      },
      {
        path: 'docs/configuration/storage/s3.html',
        data: {
          page_title: 'S3 - Storage Backends - Configuration',
          sidebar_title: 'S3',
          sidebar_current: 'docs-configuration-storage-s3'
        }
      },
      {
        path: 'docs/configuration/storage/azure.html',
        data: {
          page_title: 'Azure - Storage Backends - Configuration',
          sidebar_title: 'Azure',
          sidebar_current: 'docs-configuration-storage-azure'
        }
      },
      {
        path: 'docs/configuration/storage/mssql.html',
        data: {
          page_title: 'MSSQL - Storage Backends - Configuration',
          sidebar_title: 'MSSQL',
          sidebar_current: 'docs-configuration-storage-mssql'
        }
      },
      {
        path: 'docs/configuration/storage/dynamodb.html',
        data: {
          page_title: 'DynamoDB - Storage Backends - Configuration',
          sidebar_title: 'DynamoDB',
          sidebar_current: 'docs-configuration-storage-dynamodb'
        }
      },
      {
        path: 'docs/configuration/storage/mysql.html',
        data: {
          page_title: 'MySQL - Storage Backends - Configuration',
          sidebar_title: 'MySQL',
          sidebar_current: 'docs-configuration-storage-mysql'
        }
      },
      {
        path: 'docs/configuration/storage/foundationdb.html',
        data: {
          page_title: 'FoundationDB - Storage Backends - Configuration',
          sidebar_title: 'FoundationDB',
          sidebar_current: 'docs-configuration-storage-foundationdb'
        }
      },
      {
        path: 'docs/configuration/storage/cassandra.html',
        data: {
          page_title: 'Cassandra - Storage Backends - Configuration',
          sidebar_title: 'Cassandra',
          sidebar_current: 'docs-configuration-storage-cassandra'
        }
      },
      {
        path: 'docs/configuration/storage/manta.html',
        data: {
          page_title: 'Manta - Storage Backends - Configuration',
          sidebar_title: 'Manta',
          sidebar_current: 'docs-configuration-storage-manta'
        }
      },
      {
        path: 'docs/configuration/storage/etcd.html',
        data: {
          page_title: 'Etcd - Storage Backends - Configuration',
          sidebar_title: 'Etcd',
          sidebar_current: 'docs-configuration-storage-etcd'
        }
      },
      {
        path: 'docs/install/index.html',
        data: {
          page_title: 'Install Vault',
          sidebar_title: 'Installing Vault',
          sidebar_current: 'docs-install-install'
        }
      },
      {
        path: 'docs/enterprise/sealwrap/Vault_Compliance_Letter_signed.pdf',
        data: {}
      },
      {
        path: 'docs/enterprise/sealwrap/index.html',
        data: {
          page_title: 'Vault Enterprise Seal Wrap',
          sidebar_title: 'Seal Wrap / FIPS 140-2',
          sidebar_current: 'docs-vault-enterprise-sealwrap'
        }
      },
      {
        path: 'docs/enterprise/index.html',
        data: {
          page_title: 'Vault Enterprise',
          sidebar_title: 'Vault Enterprise',
          sidebar_current: 'docs-vault-enterprise'
        }
      },
      {
        path: 'docs/enterprise/performance-standby/index.html',
        data: {
          page_title: 'Performance Standby Nodes - Vault Enterprise',
          sidebar_title: 'Performance Standbys',
          sidebar_current: 'docs-vault-enterprise-perf-standbys'
        }
      },
      {
        path: 'docs/enterprise/hsm/index.html',
        data: {
          page_title: 'HSM Integration - Vault Enterprise',
          sidebar_title: 'HSM Support',
          sidebar_current: 'docs-vault-enterprise-hsm'
        }
      },
      {
        path: 'docs/enterprise/hsm/security.html',
        data: {
          page_title: 'Security Details - HSM Integration - Vault Enterprise',
          sidebar_title: 'Security',
          sidebar_current: 'docs-vault-enterprise-hsm-security'
        }
      },
      {
        path: 'docs/enterprise/hsm/behavior.html',
        data: {
          page_title: 'Behavioral Changes - HSM Integration - Vault Enterprise',
          sidebar_title: 'Behavioral Changes',
          sidebar_current: 'docs-vault-enterprise-hsm-behavior'
        }
      },
      {
        path: 'docs/enterprise/mfa/mfa-pingid.html',
        data: {
          page_title: 'PingID MFA - MFA Support - Vault Enterprise',
          sidebar_title: 'PingID MFA',
          sidebar_current: 'docs-vault-enterprise-mfa-pingid'
        }
      },
      {
        path: 'docs/enterprise/mfa/index.html',
        data: {
          page_title: 'MFA Support - Vault Enterprise',
          sidebar_title: 'MFA',
          sidebar_current: 'docs-vault-enterprise-mfa'
        }
      },
      {
        path: 'docs/enterprise/mfa/mfa-okta.html',
        data: {
          page_title: 'Okta MFA - MFA Support - Vault Enterprise',
          sidebar_title: 'Okta MFA',
          sidebar_current: 'docs-vault-enterprise-mfa-okta'
        }
      },
      {
        path: 'docs/enterprise/mfa/mfa-duo.html',
        data: {
          page_title: 'Duo MFA - MFA Support - Vault Enterprise',
          sidebar_title: 'Duo MFA',
          sidebar_current: 'docs-vault-enterprise-mfa-duo'
        }
      },
      {
        path: 'docs/enterprise/mfa/mfa-totp.html',
        data: {
          page_title: 'TOTP MFA - MFA Support - Vault Enterprise',
          sidebar_title: 'TOTP MFA',
          sidebar_current: 'docs-vault-enterprise-mfa-totp'
        }
      },
      {
        path: 'docs/enterprise/sentinel/index.html',
        data: {
          page_title: 'Vault Enterprise Sentinel Integration',
          sidebar_title: 'Sentinel',
          sidebar_current: 'docs-vault-enterprise-sentinel'
        }
      },
      {
        path: 'docs/enterprise/sentinel/examples.html',
        data: {
          page_title: 'Sentinel Examples',
          sidebar_title: 'Examples',
          sidebar_current: 'docs-vault-enterprise-sentinel-examples'
        }
      },
      {
        path: 'docs/enterprise/sentinel/properties.html',
        data: {
          page_title: 'Sentinel Properties',
          sidebar_title: 'Properties',
          sidebar_current: 'docs-vault-enterprise-sentinel-properties'
        }
      },
      {
        path: 'docs/enterprise/namespaces/index.html',
        data: {
          page_title: 'Namespaces - Vault Enterprise',
          sidebar_title: 'Namespaces',
          sidebar_current: 'docs-vault-enterprise-namespaces'
        }
      },
      {
        path: 'docs/enterprise/control-groups/index.html',
        data: {
          page_title: 'Vault Enterprise Control Groups',
          sidebar_title: 'Control Groups',
          sidebar_current: 'docs-vault-enterprise-control-groups'
        }
      },
      {
        path: 'docs/enterprise/replication/index.html',
        data: {
          page_title: 'Replication - Vault Enterprise',
          sidebar_title: 'Replication',
          sidebar_current: 'docs-vault-enterprise-replication'
        }
      },
      {
        path: 'docs/enterprise/auto-unseal/index.html',
        data: {
          page_title: 'Vault Enterprise Auto Unseal',
          sidebar_title: 'Auto Unseal',
          sidebar_current: 'docs-vault-enterprise-auto-unseal'
        }
      },
      {
        path: 'docs/auth/github.html',
        data: {
          page_title: 'GitHub - Auth Methods',
          sidebar_title: 'GitHub',
          sidebar_current: 'docs-auth-github'
        }
      },
      {
        path: 'docs/auth/gcp.html',
        data: {
          page_title: 'Google Cloud - Auth Methods',
          sidebar_title: 'Google Cloud',
          sidebar_current: 'docs-auth-gcp'
        }
      },
      {
        path: 'docs/auth/ldap.html',
        data: {
          page_title: 'LDAP - Auth Methods',
          sidebar_title: 'LDAP',
          sidebar_current: 'docs-auth-ldap'
        }
      },
      {
        path: 'docs/auth/userpass.html',
        data: {
          page_title: 'Userpass - Auth Methods',
          sidebar_title: 'Username &amp; Password',
          sidebar_current: 'docs-auth-userpass'
        }
      },
      {
        path: 'docs/auth/index.html',
        data: {
          page_title: 'Auth Methods',
          sidebar_title: 'Auth Methods',
          sidebar_current: 'docs-auth'
        }
      },
      {
        path: 'docs/auth/aws.html',
        data: {
          page_title: 'AWS - Auth Methods',
          sidebar_title: 'AWS',
          sidebar_current: 'docs-auth-aws'
        }
      },
      {
        path: 'docs/auth/mfa.html',
        data: {
          page_title: 'Multi-Factor Authentication (MFA) - Auth Methods',
          sidebar_title: 'MFA <sup>LEGACY / UNSUPPORTED</sup>',
          sidebar_current: 'docs-auth-mfa'
        }
      },
      {
        path: 'docs/auth/cert.html',
        data: {
          page_title: 'TLS Certificates - Auth Methods',
          sidebar_title: 'TLS Certificates',
          sidebar_current: 'docs-auth-cert'
        }
      },
      {
        path: 'docs/auth/kubernetes.html',
        data: {
          page_title: 'Kubernetes - Auth Methods',
          sidebar_title: 'Kubernetes',
          sidebar_current: 'docs-auth-kubernetes'
        }
      },
      {
        path: 'docs/auth/okta.html',
        data: {
          page_title: 'Okta - Auth Methods',
          sidebar_title: 'Okta',
          sidebar_current: 'docs-auth-okta'
        }
      },
      {
        path: 'docs/auth/azure.html',
        data: {
          page_title: 'Azure - Auth Methods',
          sidebar_title: 'Azure',
          sidebar_current: 'docs-auth-azure'
        }
      },
      {
        path: 'docs/auth/app-id.html',
        data: {
          page_title: 'AppID - Auth Methods',
          sidebar_title: 'App ID <sup>DEPRECATED</sup>',
          sidebar_current: 'docs-auth-appid'
        }
      },
      {
        path: 'docs/auth/alicloud.html',
        data: {
          page_title: 'AliCloud - Auth Methods',
          sidebar_title: 'AliCloud',
          sidebar_current: 'docs-auth-alicloud'
        }
      },
      {
        path: 'docs/auth/radius.html',
        data: {
          page_title: 'RADIUS - Auth Methods',
          sidebar_title: 'RADIUS',
          sidebar_current: 'docs-auth-radius'
        }
      },
      {
        path: 'docs/auth/approle.html',
        data: {
          page_title: 'AppRole - Auth Methods',
          sidebar_title: 'AppRole',
          sidebar_current: 'docs-auth-approle'
        }
      },
      {
        path: 'docs/auth/token.html',
        data: {
          page_title: 'Token - Auth Methods',
          sidebar_title: 'Tokens',
          sidebar_current: 'docs-auth-token'
        }
      },
      {
        path: 'docs/auth/jwt.html',
        data: {
          page_title: 'JWT - Auth Methods',
          sidebar_title: 'JWT',
          sidebar_current: 'docs-auth-jwt'
        }
      },
      {
        path: 'docs/index.html',
        data: {
          page_title: 'Documentation',
          sidebar_current: 'docs-home'
        }
      },
      {
        path: 'docs/secrets/alicloud/index.html',
        data: {
          page_title: 'AliCloud - Secrets Engines',
          sidebar_title: 'AliCloud',
          sidebar_current: 'docs-secrets-alicloud'
        }
      },
      {
        path: 'docs/secrets/postgresql/index.html',
        data: {
          page_title: 'PostgreSQL - Secrets Engines',
          sidebar_title: 'PostgreSQL <sup>DEPRECATED</sup>',
          sidebar_current: 'docs-secrets-postgresql'
        }
      },
      {
        path: 'docs/secrets/databases/mysql-maria.html',
        data: {
          page_title: 'MySQL/MariaDB - Database - Secrets Engines',
          sidebar_title: 'MySQL/MariaDB',
          sidebar_current: 'docs-secrets-databases-mysql-maria'
        }
      },
      {
        path: 'docs/secrets/databases/postgresql.html',
        data: {
          page_title: 'PostgreSQL - Database - Secrets Engines',
          sidebar_title: 'PostgreSQL',
          sidebar_current: 'docs-secrets-databases-postgresql'
        }
      },
      {
        path: 'docs/secrets/databases/oracle.html',
        data: {
          page_title: 'Oracle - Database - Secrets Engines',
          sidebar_title: 'Oracle',
          sidebar_current: 'docs-secrets-databases-oracle'
        }
      },
      {
        path: 'docs/secrets/databases/mongodb.html',
        data: {
          page_title: 'MongoDB - Database - Secrets Engines',
          sidebar_title: 'MongoDB',
          sidebar_current: 'docs-secrets-databases-mongodb'
        }
      },
      {
        path: 'docs/secrets/databases/custom.html',
        data: {
          page_title: 'Custom - Database - Secrets Engines',
          sidebar_title: 'Custom',
          sidebar_current: 'docs-secrets-databases-custom'
        }
      },
      {
        path: 'docs/secrets/databases/index.html',
        data: {
          page_title: 'Database - Secrets Engines',
          sidebar_title: 'Databases',
          sidebar_current: 'docs-secrets-databases'
        }
      },
      {
        path: 'docs/secrets/databases/mssql.html',
        data: {
          page_title: 'MSSQL - Database - Secrets Engines',
          sidebar_title: 'MSSQL',
          sidebar_current: 'docs-secrets-databases-mssql'
        }
      },
      {
        path: 'docs/secrets/databases/cassandra.html',
        data: {
          page_title: 'Cassandra - Database - Secrets Engines',
          sidebar_title: 'Cassandra',
          sidebar_current: 'docs-secrets-databases-cassandra'
        }
      },
      {
        path: 'docs/secrets/databases/hanadb.html',
        data: {
          page_title: 'HANA - Database - Secrets Engines',
          sidebar_title: 'HanaDB',
          sidebar_current: 'docs-secrets-databases-hanadb'
        }
      },
      {
        path: 'docs/secrets/kv/index.html',
        data: {
          page_title: 'KV - Secrets Engines',
          sidebar_title: 'Key/Value',
          sidebar_current: 'docs-secrets-kv'
        }
      },
      {
        path: 'docs/secrets/kv/kv-v2.html',
        data: {
          page_title: 'KV - Secrets Engines',
          sidebar_title: 'K/V Version 2',
          sidebar_current: 'docs-secrets-kv-v2'
        }
      },
      {
        path: 'docs/secrets/kv/kv-v1.html',
        data: {
          page_title: 'KV - Secrets Engines',
          sidebar_title: 'K/V Version 1',
          sidebar_current: 'docs-secrets-kv-v1'
        }
      },
      {
        path: 'docs/secrets/cubbyhole/index.html',
        data: {
          page_title: 'Cubbyhole - Secrets Engines',
          sidebar_title: 'Cubbyhole',
          sidebar_current: 'docs-secrets-cubbyhole'
        }
      },
      {
        path: 'docs/secrets/ad/index.html',
        data: {
          page_title: 'Active Directory - Secrets Engines',
          sidebar_title: 'Active Directory',
          sidebar_current: 'docs-secrets-active-directory'
        }
      },
      {
        path: 'docs/secrets/identity/index.html',
        data: {
          page_title: 'Identity - Secrets Engines',
          sidebar_title: 'Identity',
          sidebar_current: 'docs-secrets-identity'
        }
      },
      {
        path: 'docs/secrets/azure/index.html',
        data: {
          page_title: 'Azure - Secrets Engine',
          sidebar_title: 'Azure',
          sidebar_current: 'docs-secrets-azure'
        }
      },
      {
        path: 'docs/secrets/index.html',
        data: {
          page_title: 'Secrets Engines',
          sidebar_title: 'Secrets Engines',
          sidebar_current: 'docs-secrets'
        }
      },
      {
        path: 'docs/secrets/rabbitmq/index.html',
        data: {
          page_title: 'RabbitMQ - Secrets Engines',
          sidebar_title: 'RabbitMQ',
          sidebar_current: 'docs-secrets-rabbitmq'
        }
      },
      {
        path: 'docs/secrets/gcp/index.html',
        data: {
          page_title: 'Google Cloud - Secrets Engines',
          sidebar_title: 'Google Cloud',
          sidebar_current: 'docs-secrets-gcp'
        }
      },
      {
        path: 'docs/secrets/transit/index.html',
        data: {
          page_title: 'Transit - Secrets Engines',
          sidebar_title: 'Transit',
          sidebar_current: 'docs-secrets-transit'
        }
      },
      {
        path: 'docs/secrets/mongodb/index.html',
        data: {
          page_title: 'MongoDB - Secrets Engines',
          sidebar_title: 'MongoDB <sup>DEPRECATED</sup>',
          sidebar_current: 'docs-secrets-mongodb'
        }
      },
      {
        path: 'docs/secrets/ssh/dynamic-ssh-keys.html',
        data: {
          page_title: 'Dynamic SSH Keys - SSH - Secrets Engines',
          sidebar_title: 'Dynamic Key',
          sidebar_current: 'docs-secrets-ssh-dynamic-ssh-keys'
        }
      },
      {
        path: 'docs/secrets/ssh/index.html',
        data: {
          page_title: 'SSH - Secrets Engines',
          sidebar_title: 'SSH',
          sidebar_current: 'docs-secrets-ssh'
        }
      },
      {
        path: 'docs/secrets/ssh/signed-ssh-certificates.html',
        data: {
          page_title: 'Signed SSH Certificates - SSH - Secrets Engines',
          sidebar_title: 'Signed Certificates',
          sidebar_current: 'docs-secrets-ssh-signed-ssh-certificates'
        }
      },
      {
        path: 'docs/secrets/ssh/one-time-ssh-passwords.html',
        data: {
          page_title: 'One-Time SSH Passwords (OTP) - SSH - Secrets Engines',
          sidebar_title: 'SSH OTP',
          sidebar_current: 'docs-secrets-ssh-one-time-ssh-passwords'
        }
      },
      {
        path: 'docs/secrets/nomad/index.html',
        data: {
          page_title: 'Nomad Secret Backend',
          sidebar_title: 'Nomad',
          sidebar_current: 'docs-secrets-nomad'
        }
      },
      {
        path: 'docs/secrets/consul/index.html',
        data: {
          page_title: 'Consul - Secrets Engines',
          sidebar_title: 'Consul',
          sidebar_current: 'docs-secrets-consul'
        }
      },
      {
        path: 'docs/secrets/cassandra/index.html',
        data: {
          page_title: 'Cassandra - Secrets Engines',
          sidebar_title: 'Cassandra <sup>DEPRECATED</sup>',
          sidebar_current: 'docs-secrets-cassandra'
        }
      },
      {
        path: 'docs/secrets/mysql/index.html',
        data: {
          page_title: 'MySQL - Secrets Engines',
          sidebar_title: 'MySQL <sup>DEPRECATED</sup>',
          sidebar_current: 'docs-secrets-mysql'
        }
      },
      {
        path: 'docs/secrets/aws/index.html',
        data: {
          page_title: 'AWS - Secrets Engines',
          sidebar_title: 'AWS',
          sidebar_current: 'docs-secrets-aws'
        }
      },
      {
        path: 'docs/secrets/totp/index.html',
        data: {
          page_title: 'TOTP - Secrets Engines',
          sidebar_title: 'TOTP',
          sidebar_current: 'docs-secrets-totp'
        }
      },
      {
        path: 'docs/secrets/mssql/index.html',
        data: {
          page_title: 'MSSQL - Secrets Engines',
          sidebar_title: 'MSSQL <sup>DEPRECATED</sup>',
          sidebar_current: 'docs-secrets-mssql'
        }
      },
      {
        path: 'docs/secrets/pki/index.html',
        data: {
          page_title: 'PKI - Secrets Engines',
          sidebar_title: 'PKI (Certificates)',
          sidebar_current: 'docs-secrets-pki'
        }
      },
      {
        path: 'docs/plugin/index.html',
        data: {
          page_title: 'Custom Plugin Backends',
          sidebar_title: 'Plugin Backends',
          sidebar_current: 'docs-plugin'
        }
      },
      {
        path: 'docs/agent/autoauth/methods/gcp.html',
        data: {
          page_title: 'Vault Agent Auto-Auth GCP Method',
          sidebar_title: 'GCP',
          sidebar_current: 'docs-agent-autoauth-methods-gcp'
        }
      },
      {
        path: 'docs/agent/autoauth/methods/index.html',
        data: {
          page_title: 'Vault Agent Auto-Auth Methods',
          sidebar_title: 'Methods',
          sidebar_current: 'docs-agent-autoauth-methods'
        }
      },
      {
        path: 'docs/agent/autoauth/methods/aws.html',
        data: {
          page_title: 'Vault Agent Auto-Auth AWS Method',
          sidebar_title: 'AWS',
          sidebar_current: 'docs-agent-autoauth-methods-aws'
        }
      },
      {
        path: 'docs/agent/autoauth/methods/kubernetes.html',
        data: {
          page_title: 'Vault Agent Auto-Auth Kubernetes Method',
          sidebar_title: 'Kubernetes',
          sidebar_current: 'docs-agent-autoauth-methods-kubernetes'
        }
      },
      {
        path: 'docs/agent/autoauth/methods/azure.html',
        data: {
          page_title: 'Vault Agent Auto-Auth Azure Method',
          sidebar_title: 'Azure',
          sidebar_current: 'docs-agent-autoauth-methods-azure'
        }
      },
      {
        path: 'docs/agent/autoauth/methods/alicloud.html',
        data: {
          page_title: 'Vault Agent Auto-Auth AliCloud Method',
          sidebar_title: 'AliCloud',
          sidebar_current: 'docs-agent-autoauth-methods-alicloud'
        }
      },
      {
        path: 'docs/agent/autoauth/methods/jwt.html',
        data: {
          page_title: 'Vault Agent Auto-Auth JWT Method',
          sidebar_title: 'JWT',
          sidebar_current: 'docs-agent-autoauth-methods-jwt'
        }
      },
      {
        path: 'docs/agent/autoauth/index.html',
        data: {
          page_title: 'Vault Agent Auto-Auth',
          sidebar_title: 'Auto-Auth',
          sidebar_current: 'docs-agent-autoauth'
        }
      },
      {
        path: 'docs/agent/autoauth/sinks/file.html',
        data: {
          page_title: 'Vault Agent Auto-Auth File Sink',
          sidebar_title: 'File',
          sidebar_current: 'docs-agent-autoauth-sinks-file'
        }
      },
      {
        path: 'docs/agent/autoauth/sinks/index.html',
        data: {
          page_title: 'Vault Agent Auto-Auth Sinks',
          sidebar_title: 'Sinks',
          sidebar_current: 'docs-agent-autoauth-sinks'
        }
      },
      {
        path: 'docs/agent/index.html',
        data: {
          page_title: 'Vault Agent',
          sidebar_title: 'Vault Agent',
          sidebar_current: 'docs-agent'
        }
      },
      {
        path: 'docs/internals/rotation.html',
        data: {
          page_title: 'Key Rotation',
          sidebar_title: 'Key Rotation',
          sidebar_current: 'docs-internals-rotation'
        }
      },
      {
        path: 'docs/internals/plugins.html',
        data: {
          page_title: 'Plugin System',
          sidebar_title: 'Plugins',
          sidebar_current: 'docs-internals-plugins'
        }
      },
      {
        path: 'docs/internals/index.html',
        data: {
          page_title: 'Internals',
          sidebar_title: 'Internals',
          sidebar_current: 'docs-internals'
        }
      },
      {
        path: 'docs/internals/security.html',
        data: {
          page_title: 'Security Model',
          sidebar_title: 'Security Model',
          sidebar_current: 'docs-internals-security'
        }
      },
      {
        path: 'docs/internals/telemetry.html',
        data: {
          page_title: 'Telemetry',
          sidebar_title: 'Telemetry',
          sidebar_current: 'docs-internals-telemetry'
        }
      },
      {
        path: 'docs/internals/high-availability.html',
        data: {
          page_title: 'High Availability',
          sidebar_title: 'High Availability',
          sidebar_current: 'docs-internals-ha'
        }
      },
      {
        path: 'docs/internals/architecture.html',
        data: {
          page_title: 'Architecture',
          sidebar_title: 'Architecture',
          sidebar_current: 'docs-internals-architecture'
        }
      },
      {
        path: 'docs/internals/replication.html',
        data: {
          page_title: 'Replication',
          sidebar_title: 'Replication',
          sidebar_current: 'docs-internals-replication'
        }
      },
      {
        path: 'docs/internals/token.html',
        data: {
          page_title: 'Token Authentication',
          sidebar_title: 'Token Authentication',
          sidebar_current: 'docs-internals-token'
        }
      },
      {
        path: 'docs/audit/file.html',
        data: {
          page_title: 'File - Audit Devices',
          sidebar_title: 'File',
          sidebar_current: 'docs-audit-file'
        }
      },
      {
        path: 'docs/audit/index.html',
        data: {
          page_title: 'Audit Devices',
          sidebar_title: 'Audit Devices',
          sidebar_current: 'docs-audit'
        }
      },
      {
        path: 'docs/audit/syslog.html',
        data: {
          page_title: 'Syslog - Audit Devices',
          sidebar_title: 'Syslog',
          sidebar_current: 'docs-audit-syslog'
        }
      },
      {
        path: 'docs/audit/socket.html',
        data: {
          page_title: 'Socket - Audit Devices',
          sidebar_title: 'Socket',
          sidebar_current: 'docs-audit-socket'
        }
      },
      {
        path: 'docs/concepts/ha.html',
        data: {
          page_title: 'High Availability',
          sidebar_title: 'High Availability',
          sidebar_current: 'docs-concepts-ha'
        }
      },
      {
        path: 'docs/concepts/index.html',
        data: {
          page_title: 'Basic Concepts',
          sidebar_title: 'Basic Concepts',
          sidebar_current: 'docs-concepts'
        }
      },
      {
        path: 'docs/concepts/auth.html',
        data: {
          page_title: 'Authentication',
          sidebar_title: 'Authentication',
          sidebar_current: 'docs-concepts-auth'
        }
      },
      {
        path: 'docs/concepts/policies.html',
        data: {
          page_title: 'Policies',
          sidebar_title: 'Policies',
          sidebar_current: 'docs-concepts-policies'
        }
      },
      {
        path: 'docs/concepts/tokens.html',
        data: {
          page_title: 'Tokens',
          sidebar_title: 'Tokens',
          sidebar_current: 'docs-concepts-tokens'
        }
      },
      {
        path: 'docs/concepts/pgp-gpg-keybase.html',
        data: {
          page_title: 'Using PGP, GPG, and Keybase',
          sidebar_title: 'PGP, GPG, and Keybase',
          sidebar_current: 'docs-concepts-pgp-gpg-keybase'
        }
      },
      {
        path: 'docs/concepts/dev-server.html',
        data: {
          page_title: 'Dev Server Mode',
          sidebar_title: "'Dev' Server",
          sidebar_current: 'docs-concepts-devserver'
        }
      },
      {
        path: 'docs/concepts/response-wrapping.html',
        data: {
          page_title: 'Response Wrapping',
          sidebar_title: 'Response Wrapping',
          sidebar_current: 'docs-concepts-response-wrapping'
        }
      },
      {
        path: 'docs/concepts/seal.html',
        data: {
          page_title: 'Seal/Unseal',
          sidebar_title: 'Seal/Unseal',
          sidebar_current: 'docs-concepts-seal'
        }
      },
      {
        path: 'docs/concepts/lease.html',
        data: {
          page_title: 'Lease, Renew, and Revoke',
          sidebar_title: 'Lease, Renew, and Revoke',
          sidebar_current: 'docs-concepts-lease'
        }
      },
      {
        path: 'docs/commands/token/create.html',
        data: {
          page_title: 'token create - Command',
          sidebar_title: 'create',
          sidebar_current: 'docs-commands-token-create'
        }
      },
      {
        path: 'docs/commands/token/index.html',
        data: {
          page_title: 'token - Command',
          sidebar_title: 'token',
          sidebar_current: 'docs-commands-token'
        }
      },
      {
        path: 'docs/commands/token/capabilities.html',
        data: {
          page_title: 'token capabilities - Command',
          sidebar_title: 'capabilities',
          sidebar_current: 'docs-commands-token-capabilities'
        }
      },
      {
        path: 'docs/commands/token/lookup.html',
        data: {
          page_title: 'token lookup - Command',
          sidebar_title: 'lookup',
          sidebar_current: 'docs-commands-token-lookup'
        }
      },
      {
        path: 'docs/commands/token/renew.html',
        data: {
          page_title: 'token renew - Command',
          sidebar_title: 'renew',
          sidebar_current: 'docs-commands-token-renew'
        }
      },
      {
        path: 'docs/commands/token/revoke.html',
        data: {
          page_title: 'token revoke - Command',
          sidebar_title: 'revoke',
          sidebar_current: 'docs-commands-token-revoke'
        }
      },
      {
        path: 'docs/commands/token-helper.html',
        data: {
          page_title: 'Token Helpers',
          sidebar_title: 'Token Helpers',
          sidebar_current: 'docs-commands-token-helper'
        }
      },
      {
        path: 'docs/commands/operator.html',
        data: {
          page_title: 'operator - Command',
          sidebar_title: 'operator',
          sidebar_current: 'docs-commands-operator'
        }
      },
      {
        path: 'docs/commands/status.html',
        data: {
          page_title: 'status - Command',
          sidebar_title: 'status',
          sidebar_current: 'docs-commands-status'
        }
      },
      {
        path: 'docs/commands/login.html',
        data: {
          page_title: 'login - Command',
          sidebar_title: 'login',
          sidebar_current: 'docs-commands-login'
        }
      },
      {
        path: 'docs/commands/auth/index.html',
        data: {
          page_title: 'auth - Command',
          sidebar_title: 'auth',
          sidebar_current: 'docs-commands-auth'
        }
      },
      {
        path: 'docs/commands/auth/disable.html',
        data: {
          page_title: 'auth disable - Command',
          sidebar_title: 'disable',
          sidebar_current: 'docs-commands-auth-disable'
        }
      },
      {
        path: 'docs/commands/auth/enable.html',
        data: {
          page_title: 'auth enable - Command',
          sidebar_title: 'enable',
          sidebar_current: 'docs-commands-auth-enable'
        }
      },
      {
        path: 'docs/commands/auth/list.html',
        data: {
          page_title: 'auth list - Command',
          sidebar_title: 'list',
          sidebar_current: 'docs-commands-auth-list'
        }
      },
      {
        path: 'docs/commands/auth/tune.html',
        data: {
          page_title: 'auth tune - Command',
          sidebar_title: 'tune',
          sidebar_current: 'docs-commands-auth-tune'
        }
      },
      {
        path: 'docs/commands/auth/help.html',
        data: {
          page_title: 'auth help - Command',
          sidebar_title: 'help',
          sidebar_current: 'docs-commands-auth-help'
        }
      },
      {
        path: 'docs/commands/unwrap.html',
        data: {
          page_title: 'unwrap - Command',
          sidebar_title: 'unwrap',
          sidebar_current: 'docs-commands-unwrap'
        }
      },
      {
        path: 'docs/commands/index.html',
        data: {
          page_title: 'Commands (CLI)',
          sidebar_title: 'Commands (CLI)',
          sidebar_current: 'docs-commands'
        }
      },
      {
        path: 'docs/commands/secrets/move.html',
        data: {
          page_title: 'secrets move - Command',
          sidebar_title: 'move',
          sidebar_current: 'docs-commands-secrets-move'
        }
      },
      {
        path: 'docs/commands/secrets/index.html',
        data: {
          page_title: 'secrets - Command',
          sidebar_title: 'secrets',
          sidebar_current: 'docs-commands-secrets'
        }
      },
      {
        path: 'docs/commands/secrets/disable.html',
        data: {
          page_title: 'secrets disable - Command',
          sidebar_title: 'disable',
          sidebar_current: 'docs-commands-secrets-disable'
        }
      },
      {
        path: 'docs/commands/secrets/enable.html',
        data: {
          page_title: 'secrets enable - Command',
          sidebar_title: 'enable',
          sidebar_current: 'docs-commands-secrets-enable'
        }
      },
      {
        path: 'docs/commands/secrets/list.html',
        data: {
          page_title: 'secrets list - Command',
          sidebar_title: 'list',
          sidebar_current: 'docs-commands-secrets-list'
        }
      },
      {
        path: 'docs/commands/secrets/tune.html',
        data: {
          page_title: 'secrets tune - Command',
          sidebar_title: 'tune',
          sidebar_current: 'docs-commands-secrets-tune'
        }
      },
      {
        path: 'docs/commands/namespace.html',
        data: {
          page_title: 'namespace - Command',
          sidebar_title: 'namespace',
          sidebar_current: 'docs-commands-namespace'
        }
      },
      {
        path: 'docs/commands/plugin/register.html',
        data: {
          page_title: 'plugin register - Command',
          sidebar_title: 'register',
          sidebar_current: 'docs-commands-plugin-register'
        }
      },
      {
        path: 'docs/commands/plugin/index.html',
        data: {
          page_title: 'plugin - Command',
          sidebar_title: 'plugin',
          sidebar_current: 'docs-commands-plugin'
        }
      },
      {
        path: 'docs/commands/plugin/info.html',
        data: {
          page_title: 'plugin info - Command',
          sidebar_title: 'info',
          sidebar_current: 'docs-commands-plugin-info'
        }
      },
      {
        path: 'docs/commands/plugin/deregister.html',
        data: {
          page_title: 'plugin deregister - Command',
          sidebar_title: 'deregister',
          sidebar_current: 'docs-commands-plugin-deregister'
        }
      },
      {
        path: 'docs/commands/plugin/list.html',
        data: {
          page_title: 'plugin list - Command',
          sidebar_title: 'list',
          sidebar_current: 'docs-commands-plugin-list'
        }
      },
      {
        path: 'docs/commands/read.html',
        data: {
          page_title: 'read - Command',
          sidebar_title: 'read',
          sidebar_current: 'docs-commands-read'
        }
      },
      {
        path: 'docs/commands/ssh.html',
        data: {
          page_title: 'ssh - Command',
          sidebar_title: 'ssh',
          sidebar_current: 'docs-commands-ssh'
        }
      },
      {
        path: 'docs/commands/write.html',
        data: {
          page_title: 'write - Command',
          sidebar_title: 'write',
          sidebar_current: 'docs-commands-write'
        }
      },
      {
        path: 'docs/commands/lease/index.html',
        data: {
          page_title: 'lease - Command',
          sidebar_title: 'lease',
          sidebar_current: 'docs-commands-lease'
        }
      },
      {
        path: 'docs/commands/lease/renew.html',
        data: {
          page_title: 'lease renew - Command',
          sidebar_title: 'renew',
          sidebar_current: 'docs-commands-lease-renew'
        }
      },
      {
        path: 'docs/commands/lease/revoke.html',
        data: {
          page_title: 'lease revoke - Command',
          sidebar_title: 'revoke',
          sidebar_current: 'docs-commands-lease-revoke'
        }
      },
      {
        path: 'docs/commands/list.html',
        data: {
          page_title: 'list - Command',
          sidebar_title: 'list',
          sidebar_current: 'docs-commands-list'
        }
      },
      {
        path: 'docs/commands/audit/index.html',
        data: {
          page_title: 'audit - Command',
          sidebar_title: 'audit',
          sidebar_current: 'docs-commands-audit'
        }
      },
      {
        path: 'docs/commands/audit/disable.html',
        data: {
          page_title: 'audit disable - Command',
          sidebar_title: 'disable',
          sidebar_current: 'docs-commands-audit-disable'
        }
      },
      {
        path: 'docs/commands/audit/enable.html',
        data: {
          page_title: 'audit enable - Command',
          sidebar_title: 'enable',
          sidebar_current: 'docs-commands-audit-enable'
        }
      },
      {
        path: 'docs/commands/audit/list.html',
        data: {
          page_title: 'audit list - Command',
          sidebar_title: 'list',
          sidebar_current: 'docs-commands-audit-list'
        }
      },
      {
        path: 'docs/commands/server.html',
        data: {
          page_title: 'server - Command',
          sidebar_title: 'server',
          sidebar_current: 'docs-commands-server'
        }
      },
      {
        path: 'docs/commands/delete.html',
        data: {
          page_title: 'delete - Command',
          sidebar_title: 'delete',
          sidebar_current: 'docs-commands-delete'
        }
      },
      {
        path: 'docs/commands/help.html',
        data: {
          page_title: 'Path Help',
          sidebar_title: 'path-help',
          sidebar_current: 'docs-commands-path-help'
        }
      },
      {
        path: 'docs/commands/agent.html',
        data: {
          page_title: 'agent - Command',
          sidebar_title: 'agent',
          sidebar_current: 'docs-commands-agent'
        }
      },
      {
        path: 'docs/commands/path-help.html',
        data: {
          page_title: 'path-help - Command',
          sidebar_title: 'path-help',
          sidebar_current: 'docs-commands-path-help'
        }
      },
      {
        path: 'docs/commands/lease.html',
        data: {
          page_title: 'lease - Command',
          sidebar_title: 'lease',
          sidebar_current: 'docs-commands-lease'
        }
      },
      {
        path: 'docs/commands/operator/key-status.html',
        data: {
          page_title: 'operator key-status - Command',
          sidebar_title: 'key-status',
          sidebar_current: 'docs-commands-operator-key-status'
        }
      },
      {
        path: 'docs/commands/operator/rotate.html',
        data: {
          page_title: 'operator rotate - Command',
          sidebar_title: 'rotate',
          sidebar_current: 'docs-commands-operator-rotate'
        }
      },
      {
        path: 'docs/commands/operator/init.html',
        data: {
          page_title: 'operator init - Command',
          sidebar_title: 'init',
          sidebar_current: 'docs-commands-operator-init'
        }
      },
      {
        path: 'docs/commands/operator/generate-root.html',
        data: {
          page_title: 'operator generate-root - Command',
          sidebar_title: 'generate-root',
          sidebar_current: 'docs-commands-operator-generate-root'
        }
      },
      {
        path: 'docs/commands/operator/unseal.html',
        data: {
          page_title: 'operator unseal - Command',
          sidebar_title: 'unseal',
          sidebar_current: 'docs-commands-operator-unseal'
        }
      },
      {
        path: 'docs/commands/operator/index.html',
        data: {
          page_title: 'operator - Command',
          sidebar_title: 'operator',
          sidebar_current: 'docs-commands-operator'
        }
      },
      {
        path: 'docs/commands/operator/migrate.html',
        data: {
          page_title: 'operator migrate - Command',
          sidebar_title: 'migrate',
          sidebar_current: 'docs-commands-operator-migrate'
        }
      },
      {
        path: 'docs/commands/operator/rekey.html',
        data: {
          page_title: 'operator rekey - Command',
          sidebar_title: 'rekey',
          sidebar_current: 'docs-commands-operator-rekey'
        }
      },
      {
        path: 'docs/commands/operator/step-down.html',
        data: {
          page_title: 'operator step-down - Command',
          sidebar_title: 'step-down',
          sidebar_current: 'docs-commands-operator-step-down'
        }
      },
      {
        path: 'docs/commands/operator/seal.html',
        data: {
          page_title: 'operator seal - Command',
          sidebar_title: 'seal',
          sidebar_current: 'docs-commands-operator-seal'
        }
      },
      {
        path: 'docs/commands/policy/index.html',
        data: {
          page_title: 'policy - Command',
          sidebar_title: 'policy',
          sidebar_current: 'docs-commands-policy'
        }
      },
      {
        path: 'docs/commands/policy/fmt.html',
        data: {
          page_title: 'policy fmt - Command',
          sidebar_title: 'fmt',
          sidebar_current: 'docs-commands-policy-fmt'
        }
      },
      {
        path: 'docs/commands/policy/read.html',
        data: {
          page_title: 'policy read - Command',
          sidebar_title: 'read',
          sidebar_current: 'docs-commands-policy-read'
        }
      },
      {
        path: 'docs/commands/policy/write.html',
        data: {
          page_title: 'policy write - Command',
          sidebar_title: 'write',
          sidebar_current: 'docs-commands-policy-write'
        }
      },
      {
        path: 'docs/commands/policy/list.html',
        data: {
          page_title: 'policy list - Command',
          sidebar_title: 'list',
          sidebar_current: 'docs-commands-policy-list'
        }
      },
      {
        path: 'docs/commands/policy/delete.html',
        data: {
          page_title: 'policy delete - Command',
          sidebar_title: 'delete',
          sidebar_current: 'docs-commands-policy-delete'
        }
      }
    ]
  }
]

props.name = 'Docs Sitemap'

let testProps = {}
props.forEach(prop => {
  testProps[prop.name] = prop.value
})

module.exports = testProps
