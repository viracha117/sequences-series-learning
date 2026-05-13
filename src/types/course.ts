export interface Course {
  id: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  chapters: Chapter[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  image?: string;
  rating?: number;
  students?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Chapter {
  id: string;
  titleTh: string;
  titleEn: string;
  lessons: string[];
  order: number;
}

export interface CourseProgress {
  courseId: string;
  completedLessons: string[];
  currentLesson: string;
  progress: number;
  completedAt?: string;
  lastAccessedAt: string;
}
