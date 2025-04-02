export interface MenuItem {
  id: string
  icon: string
  label: string
  href?: string
}

// Types for permission categories
export interface PermissionCategory {
  id: string
  name: string
  icon: string
  permissions?: MenuItem[]
}

// Type for slider images
export interface SliderImage {
  src: string
  alt: string
}

// Role content interface
export interface RoleContent {
  id: string
  name: string
  description: string
  mainPermissions: MenuItem[]
  subPermissions: PermissionCategory[]
  sliderImages: SliderImage[]
}

// Define all role content data
export const roleContent: RoleContent[] = [
  {
    id: "principal",
    name: "Principal",
    description:
      "For administrators, the LMS offers significant time and cost savings. Its user-friendly interface simplifies onboarding and training, while robust tracking features free up administrative time for more strategic educational purposes.",
    mainPermissions: [
      {
        id: "education",
        icon: "/education_icon.png",
        label: "Education",
      },
      {
        id: "academic-management",
        icon: "/academic_icon.png",
        label: "Academic Management",
      },
      {
        id: "contact",
        icon: "/contact_icon.png",
        label: "Contact",
      },
      {
        id: "note",
        icon: "/note_icon.png",
        label: "Note",
      },
      {
        id: "agendas",
        icon: "/calendar_icon.png",
        label: "Agendas",
      },
    ],
    subPermissions: [
      {
        id: "education",
        name: "Education",
        icon: "/education_icon.png",
        permissions: [
          { id: "daily-monitoring", icon: "/daily_monitoring_icon.png", label: "Daily monitoring" },
          { id: "class", icon: "/class_icon.png", label: "Class" },
          { id: "timetable", icon: "/timetable_icon.png", label: "Timetable" },
          { id: "statistic", icon: "/statistic_icon.png", label: "Statistic" },
          { id: "journal", icon: "/journal_icon.png", label: "Journal" },
          { id: "report", icon: "/report_icon.png", label: "Report" },
          { id: "daybook", icon: "/daybook_icon.png", label: "Daybook" },
          { id: "announcements", icon: "/announcements_icon.png", label: "Announcements" },
        ],
      },
    ],
    sliderImages: [
      { src: "/slider_mock.png", alt: "Principal statistics dashboard" },
      { src: "/slider_principal_2.png", alt: "Principal management view" },
      { src: "/slider_principal_3.png", alt: "Principal reports overview" },
    ],
  },
  {
    id: "teacher",
    name: "Teacher",
    description:
      "LMS is a source of efficiency for teachers that eases the burden of paperwork and offers tools to empower them.",
    mainPermissions: [
      {
        id: "main",
        icon: "/education_icon.png",
        label: "Main",
      },
      {
        id: "other",
        icon: "/academic_icon.png",
        label: "Other",
      },
      {
        id: "contact",
        icon: "/contact_icon.png",
        label: "Contact",
      },
      {
        id: "note",
        icon: "/note_icon.png",
        label: "Note",
      },
      {
        id: "agendas",
        icon: "/calendar_icon.png",
        label: "Agendas",
      },
    ],
    subPermissions: [
      {
        id: "main",
        name: "Main",
        icon: "/education_icon.png",
        permissions: [
          { id: "timetable", icon: "/timetable_icon.png", label: "Timetable" },
          { id: "journal", icon: "/journal_icon.png", label: "Journal" },
          { id: "content", icon: "/content_icon.png", label: "Content" },
          { id: "performance", icon: "/performance_icon.png", label: "Performance" },
          { id: "task", icon: "/task_icon.png", label: "Task" },
          { id: "teaching-plan", icon: "/teaching_plan.png", label: "Teaching Plan" },
          { id: "test", icon: "/test_icon.png", label: "Test" },
          { id: "announcement", icon: "/announcements_icon.png", label: "Announcement" },
        ],
      },
    ],
    sliderImages: [
      { src: "/slider_mock.png", alt: "Teacher dashboard" },
      { src: "/slider_teacher_2.png", alt: "Teacher class management" },
      { src: "/slider_teacher_3.png", alt: "Teacher grading view" },
    ],
  },
  {
    id: "parent",
    name: "Parent",
    description:
      "As a result of the digital transformation of education, the parent becomes a participant in the educational process",
    mainPermissions: [
      {
        id: "main",
        icon: "/education_icon.png",
        label: "Main",
      },
      {
        id: "other",
        icon: "/academic_icon.png",
        label: "Other",
      },
      {
        id: "contact",
        icon: "/contact_icon.png",
        label: "Contact",
      },
      {
        id: "note",
        icon: "/note_icon.png",
        label: "Note",  
      },
      {
        id: "agendas",
        icon: "/calendar_icon.png",
        label: "Agendas",
      },
    ],
    subPermissions: [
      {
        id: "main",
        name: "Main",
        icon: "/education_icon.png",
        permissions: [
          { id: "daybook", icon: "/timetable_icon.png", label: "Daybook" },
          { id: "visiting-day", icon: "/visiting_day_icon.png", label: "Visiting day" },
          { id: "performance", icon: "/performance_icon.png", label: "Performance" },
          { id: "library", icon: "/library_icon.png", label: "Library" },
          { id: "announcement", icon: "/announcements_icon.png", label: "Announcement" },
        ],
      },
    ],
    sliderImages: [
      { src: "/slider_mock.png", alt: "Parent dashboard" },
      { src: "/slider_parent_2.png", alt: "Parent attendance view" },
      { src: "/slider_parent_3.png", alt: "Parent communication portal" },
    ],
  },
  {
    id: "student",
    name: "Student",
    description:
      "Students access course materials, submit assignments, and track their progress all in one place. Interactive learning tools and discussion forums enhance engagement and collaboration with peers.",
    mainPermissions: [
      {
        id: "main",
        icon: "/education_icon.png",
        label: "Main",
      },
      {
        id: "other",
        icon: "/academic_icon.png",
        label: "Other",
      },
      {
        id: "contact",
        icon: "/contact_icon.png",
        label: "Contact",
      },
      {
        id: "note",
        icon: "/note_icon.png",
        label: "Note",
      },
      {
        id: "agendas",
        icon: "/calendar_icon.png",
        label: "Agendas",
      },
    ],
    subPermissions: [
      {
        id: "main",
        name: "Main",
        icon: "/education_icon.png",
        permissions: [
          { id: "daybook", icon: "/timetable_icon.png", label: "Daybook" },
          { id: "content", icon: "/content_icon.png", label: "Content" },
          { id: "performance", icon: "/performance_icon.png", label: "Performance" },
          { id: "library", icon: "/library_icon.png", label: "Library" },
          { id: "task", icon: "/task_icon.png", label: "Task" },
          { id: "test", icon: "/test_icon.png", label: "Test" },
          { id: "announcement", icon: "/announcements_icon.png", label: "Announcement" },
        ],
      },
    ],
    sliderImages: [
      { src: "/slider_mock.png", alt: "Student dashboard" },
      { src: "/slider_student_2.png", alt: "Student assignments view" },
      { src: "/slider_student_3.png", alt: "Student course materials" },
    ],
  },
]

// Helper function to get a specific role content by ID
export function getRoleContent(roleId: string): RoleContent | undefined {
  return roleContent.find(role => role.id === roleId)
} 