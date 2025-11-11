# Problem Solving Section - Update Guide

## 📝 How to Update Your Data

### Update `src/data/problemSolving.json`

Replace the placeholder data with your actual information:

```json
[
  {
    "id": "codeforces",
    "name": "Codeforces",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3030301.png",
    "username": "your_actual_handle", // ← Update this
    "rating": 1500, // ← Update with your rating
    "solvedCount": 250, // ← Update with your solved count
    "profileUrl": "https://codeforces.com/profile/your_actual_handle", // ← Update this
    "color": "from-blue-500 to-blue-700"
  }
]
```

## 🎨 Available Platform Logos

The component uses online logo URLs. If any logo doesn't load, it will fallback to the Vite logo.

### Popular Platform Logo URLs:

- **Codeforces**: `https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3030301.png`
- **LeetCode**: `https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png`
- **AtCoder**: `https://img.atcoder.jp/assets/atcoder.png`
- **CodeChef**: `https://cdn.iconscout.com/icon/free/png-256/free-codechef-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945060.png`
- **HackerRank**: `https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png`

## 🎯 What You Need to Update

For each platform:

1. ✅ **username** - Your handle/username on that platform
2. ✅ **rating** - Your current rating (use `null` if not applicable)
3. ✅ **solvedCount** - Total problems solved
4. ✅ **profileUrl** - Direct link to your profile

## ⚙️ Features Included

✅ **Animated Stats Bar** showing:

- Total Problems Solved (auto-calculated)
- Platforms Participated (auto-counted)
- Highest Rating (auto-detected)

✅ **Responsive Platform Cards** with:

- Platform logo
- Username
- Rating (if available)
- Solved count
- View Profile button with hover animation

✅ **Framer Motion Animations**:

- Stagger animation for cards
- Scale animation for stats
- Hover effects on cards

✅ **Dark Mode Support** - Fully styled for both light and dark themes

## 🔧 Customization Tips

### Add More Platforms

Just add a new object to the array:

```json
{
  "id": "unique-id",
  "name": "Platform Name",
  "logo": "logo-url",
  "username": "your_username",
  "rating": 1234,
  "solvedCount": 567,
  "profileUrl": "https://platform.com/profile/your_username",
  "color": "from-red-500 to-red-700"
}
```

### Remove Platforms

Simply delete the platform object from the JSON array.

### Change Colors

Update the `color` field with any Tailwind gradient classes (not currently used in display, but available for future enhancements).

## 📍 Component Location

- **Component**: `src/components/ProblemSolving.jsx`
- **Data**: `src/data/problemSolving.json`
- **Integrated in**: `src/components/Home.jsx`

The section will appear between Skills and Projects sections on your portfolio homepage!
