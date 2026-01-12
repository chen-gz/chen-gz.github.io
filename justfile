# Default recipe, runs when you just run `just`
default:
    @echo "Available commands:"
    @echo "  just run     - Start the development server"
    @echo "  just build   - Build the project"
    @echo "  just preview - Preview the built site"
    @echo "  just test    - Run checks and diagnostics"

install:

# Start the development server
run: install
    npm run dev

# Build the project
build: install
    npm run build

# Preview the built site
preview: install
    npm run preview

# Run checks and diagnostics
test: install
    npm run astro check
