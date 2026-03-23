import { Bell, DollarSign, User, HelpCircle, LogOut } from 'lucide-react';

export default function Settings() {
  const settingsOptions = [
    {
      icon: User,
      title: 'Profile',
      description: 'Edit stall name and owner details',
      action: () => alert('Profile settings would open here')
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure low stock alerts',
      action: () => alert('Notification settings would open here')
    },
    {
      icon: DollarSign,
      title: 'Currency',
      description: 'SGD (Singapore Dollar)',
      action: () => alert('Currency settings would open here')
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get help with the app',
      action: () => alert('Help center would open here')
    }
  ];

  return (
    <div className="p-3">
      {/* Header */}
      <div className="mb-3">
        <div className="bg-orange-600 rounded-lg p-3 mb-2">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
        </div>
        <div className="bg-orange-50 border-2 border-orange-600 rounded-lg p-3 mt-4 mb-4" style={{marginTop: "30px", marginBottom: "30px"}}>
          <p className="font-bold text-gray-900 text-lg">King Chicken Stall</p>
          <p className="text-gray-600 font-bold">Block 123, Chinatown Food Centre</p>
        </div>
      </div>

      {/* Settings Options */}
      <div className="space-y-2 mb-3">
        {settingsOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <button
              key={index}
              onClick={option.action}
              className="w-full bg-white border-2 border-gray-300 rounded-lg p-3 text-left active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Icon size={22} className="text-orange-600" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{option.title}</h3>
                  <p className="text-gray-600 font-bold text-sm">{option.description}</p>
                </div>
                <div className="text-gray-400 text-2xl">→</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Logout Button */}
      <button
        onClick={() => alert('Logout functionality would be implemented here')}
        className="w-full bg-red-600 text-white rounded-lg p-3 font-bold text-lg flex items-center justify-center gap-3 active:bg-red-700 transition-colors"
      >
        <LogOut size={22} strokeWidth={2.5} />
        Logout
      </button>

      {/* App Info */}
      <div className="mt-4 text-center">
        <p className="text-gray-500 font-bold text-sm">Hawker Inventory Manager</p>
        <p className="text-gray-400 font-bold text-xs">Version 1.0.0</p>
      </div>
    </div>
  );
}