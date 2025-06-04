#!/bin/bash

# Build script for cPanel deployment

echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci --production=false

# Build the project
echo "Building project..."
npm run build

# Copy build files to public_html
echo "Copying files to public_html..."
cp -r dist/* public_html/

# Create .htaccess file
echo "Creating .htaccess file..."
cat > public_html/.htaccess << 'EOF'
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Caching for static assets
<filesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
</filesMatch>
EOF

echo "Build complete!"