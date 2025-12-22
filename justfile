# Default recipe, runs when you just run `just`
default:
    @echo "Available commands:"
    @echo "  just run     - Start the development server"
    @echo "  just build   - Build the project"
    @echo "  just preview - Preview the built site"
    @echo "  just test    - Run checks and diagnostics"

# Start the development server
run:
    npm run dev

# Build the project
build:
    npm run build

# Preview the built site
preview:
    npm run preview

# Run checks and diagnostics
test:
    npm run astro check
