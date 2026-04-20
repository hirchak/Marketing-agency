import { useState, useEffect, useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import { TranslationKey } from '../../data/translations';
import styles from './LeadForm.module.css';

const projectOptions: TranslationKey[] = ['option_website', 'option_mvp', 'option_strategy', 'option_audit', 'option_not_sure'];

export default function LeadForm() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    website: '',
    what_build: '',
    niche: '',
    stage: '',
    friction: '',
    budget: '',
    email: '',
    telegram: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          website: '',
          what_build: '',
          niche: '',
          stage: '',
          friction: '',
          budget: '',
          email: '',
          telegram: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      className={styles.section}
      id="lead"
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('lead_title')}</h2>
          <p className={styles.subtitle}>{t('lead_subtitle')}</p>
        </div>

        {status === 'success' ? (
          <div className={styles.success}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="var(--accent)" strokeWidth="2"/>
              <path d="M15 24L21 30L33 18" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{t('form_success')}</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>{t('field_website')}</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder={t('field_website_placeholder')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{t('field_what_build')}</label>
                <select
                  name="what_build"
                  value={formData.what_build}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">{t('field_what_build')}</option>
                  {projectOptions.map((opt) => (
                    <option key={opt} value={opt}>{t(opt)}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>{t('field_niche')}</label>
                <input
                  type="text"
                  name="niche"
                  value={formData.niche}
                  onChange={handleChange}
                  placeholder={t('field_niche_placeholder')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{t('field_stage')}</label>
                <input
                  type="text"
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  placeholder={t('field_stage_placeholder')}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>{t('field_friction')}</label>
              <textarea
                name="friction"
                value={formData.friction}
                onChange={handleChange}
                placeholder={t('field_friction_placeholder')}
                className={styles.textarea}
                rows={3}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>{t('field_budget')}</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="$1,000 - $5,000"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>{t('field_email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('field_email_placeholder')}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{t('field_telegram')}</label>
                <input
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder={t('field_telegram_placeholder')}
                  className={styles.input}
                />
              </div>
            </div>

            <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <span className={styles.spinner} />
              ) : (
                t('btn_submit')
              )}
            </button>

            <p className={styles.note}>{t('form_note')}</p>

            {status === 'error' && (
              <p className={styles.error}>{t('form_error')}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
