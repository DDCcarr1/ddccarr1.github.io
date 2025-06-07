def get_name(prompt):
    name = input(prompt).strip()
    while not name:
        print("Please enter a valid name.")
        name = input(prompt).strip()
    return name

def calculate_love_percentage(name1, name2):
    # Always sort names for consistency, combine and lowercase
    combined = ''.join(sorted([name1.strip().lower(), name2.strip().lower()]))
    # Deterministic "random" based on combined string
    total = sum(ord(c) for c in combined if c.isalpha())
    # Use a simple hash-like calculation for percentage between 50 and 100
    percentage = 50 + (total % 51)  # So result is between 50 and 100 inclusive
    return percentage

def main():
    print("Welcome to The Love Tester!")
    name1 = get_name("Enter the first person's name: ")
    name2 = get_name("Enter the second person's name: ")
    percentage = calculate_love_percentage(name1, name2)
    print(f"\n{name1} ❤️ {name2}\nLove score: {percentage}%")

if __name__ == "__main__":
    main()
