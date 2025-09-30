const textInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = (input) => {
    if (!input.trim()) {
        result.textContent = "⚠️ Please enter a value!";
        return;
    }

    const originalInput = input;
    const cleanInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const isPalindrome = cleanInput === [...cleanInput].reverse().join('');

    const message = `${originalInput} ${isPalindrome ? '✅ is' : '❌ is not'} a palindrome`;

    result.textContent = message;
}

// Enter key triggers check
textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkPalindrome(textInput.value);
        textInput.value = '';
    }
});

// Button click triggers check
checkPalindromeBtn.addEventListener('click', () => {
    checkPalindrome(textInput.value);
    textInput.value = '';
});
