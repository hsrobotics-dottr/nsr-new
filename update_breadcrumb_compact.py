import os
import re

def update_breadcrumb_compact():
    """Update breadcrumb spacing from pt-16 pb-4 to py-5 across all product detail pages"""

    # Directory containing product pages
    products_dir = "app/products"

    # Pattern to search for and replace
    old_pattern = "pt-16 pb-4 bg-gray-50 border-b border-gray-200"
    new_pattern = "py-5 bg-gray-50 border-b border-gray-200"

    updated_files = []

    # Walk through all files in the products directory
    for root, dirs, files in os.walk(products_dir):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)

                try:
                    # Read file content
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # Check if the old pattern exists
                    if old_pattern in content:
                        # Replace the pattern
                        new_content = content.replace(old_pattern, new_pattern)

                        # Write back to file
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)

                        updated_files.append(file_path)
                        print(f"Updated: {file_path}")

                except Exception as e:
                    print(f"Error updating {file_path}: {e}")

    print(f"\nTotal files updated: {len(updated_files)}")
    return updated_files

if __name__ == "__main__":
    print("Updating breadcrumb spacing to compact (py-5) across all product detail pages...")
    updated = update_breadcrumb_compact()
    print("Done!")
